import { NextResponse } from "next/server";

const MIN_ELAPSED_MS = 1500;

const normalize = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const name = normalize(body["full-name"]);
  const phone = normalize(body.phone);
  const email = normalize(body.email);
  const concern = normalize(body.concern);
  const message = normalize(body.message);
  const company = normalize(body.company);
  const elapsedMs = Number(body.elapsedMs ?? 0);

  if (company) {
    return NextResponse.json({ error: "Spam detected." }, { status: 400 });
  }

  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_ELAPSED_MS) {
    return NextResponse.json(
      { error: "Please try again." },
      { status: 400 }
    );
  }

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Please provide a valid name." },
      { status: 400 }
    );
  }

  if (!/^\d{10}$/.test(phone)) {
    return NextResponse.json(
      { error: "Please provide a valid phone number." },
      { status: 400 }
    );
  }

  if (!concern) {
    return NextResponse.json(
      { error: "Please select a concern." },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email." },
      { status: 400 }
    );
  }

  if (message.length > 500) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  console.info("Contact submission", {
    name,
    phone,
    email,
    concern,
    message,
  });

  return NextResponse.json({ ok: true });
}
