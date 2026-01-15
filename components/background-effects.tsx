export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute -top-40 right-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.35),_transparent_65%)] opacity-70 blur-3xl"
        data-parallax="0.08"
      ></div>
      <div
        className="absolute top-[30%] left-[-10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_70%)] opacity-60 blur-3xl"
        data-parallax="0.12"
      ></div>
      <div
        className="absolute bottom-[-12%] right-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.25),_transparent_70%)] opacity-70 blur-3xl"
        data-parallax="0.1"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
      <div className="grid-lines absolute inset-0 opacity-50"></div>
    </div>
  );
}
