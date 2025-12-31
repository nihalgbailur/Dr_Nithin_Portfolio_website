# Product Requirements Document (PRD)

## Dr. Nithin KR — Orthopedic Surgeon Portfolio Website

---

**Document Version:** 1.0  
**Date:** December 31, 2024  
**Project Type:** Single-Page Portfolio Website  
**Target Launch:** TBD

---

## 1. Executive Summary

### 1.1 Project Overview
A premium, single-page portfolio website for **Dr. Nithin KR**, an Orthopedic Surgeon practicing at Max Multi Speciality Hospital, Shivamogga. The website will serve as a digital presence to attract patients, showcase expertise, and provide easy contact options.

### 1.2 Design Philosophy
- **Parallax scrolling** for immersive storytelling
- **Glassmorphism** for modern, premium aesthetics
- **Medical professionalism** balanced with approachability
- **Mobile-first** responsive design

### 1.3 Key Objectives
| Objective | Success Metric |
|-----------|----------------|
| Increase patient inquiries | Contact form submissions |
| Build trust & credibility | Time spent on page |
| Easy accessibility | WhatsApp engagement rate |
| Regional reach | Kannada language adoption |

---

## 2. Target Audience

### 2.1 Primary Users
| Segment | Demographics | Needs |
|---------|--------------|-------|
| Local Patients | 25-65 years, Shivamogga region | Find trusted orthopedic care |
| Sports Enthusiasts | 18-40 years, athletes | Sports injury treatment |
| Elderly Patients | 50+ years | Arthritis & joint pain relief |
| Referral Patients | Via other doctors | Verify credentials |

### 2.2 User Personas

**Persona 1: Ramesh (45, Bank Manager)**
> "I've been having severe back pain for months. I need a specialist I can trust who won't suggest unnecessary surgery."

**Persona 2: Priya (28, Software Engineer)**
> "I injured my knee playing badminton. I want a doctor who understands sports injuries and can get me back to playing."

**Persona 3: Lakshmi (62, Homemaker)**
> "My knees hurt constantly. I need someone who speaks Kannada and explains things simply."

---

## 3. Brand Identity

### 3.1 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Deep Teal** | `#0D9488` | Primary — CTAs, headers, trust |
| **Dark Teal** | `#0F766E` | Primary hover states |
| **Soft White** | `#F8FAFC` | Background — clean, clinical |
| **Light Gray** | `#F1F5F9` | Section alternates |
| **Slate Gray** | `#64748B` | Body text |
| **Dark Slate** | `#1E293B` | Headings |
| **Warm Gold** | `#D4AF37` | Accent — premium highlights |
| **Success Green** | `#10B981` | WhatsApp, positive actions |

### 3.2 Typography

| Element | Font Family | Weight | Size (Desktop) |
|---------|-------------|--------|----------------|
| Hero Heading | Playfair Display | 700 | 64-72px |
| Section Headings | Playfair Display | 600 | 36-48px |
| Subheadings | Plus Jakarta Sans | 600 | 24-28px |
| Body Text | Plus Jakarta Sans | 400 | 16-18px |
| Buttons/Labels | Plus Jakarta Sans | 600 | 14-16px |
| Kannada Text | Noto Sans Kannada | 400/600 | Same as English |

### 3.3 Visual Style

**Glassmorphism Properties:**
```css
/* Glass Card Effect */
background: rgba(255, 255, 255, 0.25);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(13, 148, 136, 0.1);
```

**Parallax Effect:**
- Hero section: 0.5x scroll speed
- Background elements: 0.3x scroll speed
- Floating medical icons: subtle vertical movement

---

## 4. Information Architecture

### 4.1 Single Page Structure

```
┌─────────────────────────────────────────────┐
│  STICKY NAVIGATION                          │
│  Logo | Home | About | Services | Contact   │
│  [Language Toggle: EN/ಕನ್ನಡ]                 │
├─────────────────────────────────────────────┤
│                                             │
│  ███████  HERO SECTION  ███████            │
│  (Parallax + Glassmorphism)                 │
│  - Doctor Name & Title                      │
│  - Tagline                                  │
│  - CTA Buttons                              │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ═══════  ABOUT SECTION  ═══════           │
│  - Doctor Photo                             │
│  - Bio & Philosophy                         │
│  - Education Timeline                       │
│  - Experience Stats                         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ═══════  SERVICES SECTION  ═══════        │
│  - Service Cards (4)                        │
│  - Icons & Descriptions                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ═══════  CREDENTIALS SECTION  ═══════     │
│  - Awards & Certifications                  │
│  - Affiliations                             │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ═══════  CONTACT SECTION  ═══════         │
│  - Contact Form                             │
│  - Clinic Info                              │
│  - Google Map (Embedded)                    │
│  - Working Hours                            │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Copyright | Quick Links | Social           │
├─────────────────────────────────────────────┤
│  🟢 FLOATING WHATSAPP BUTTON               │
└─────────────────────────────────────────────┘
```

---

## 5. Detailed Section Specifications

### 5.1 Navigation Bar

**Behavior:**
- Transparent on hero, solid white/glass on scroll
- Smooth scroll to sections on click
- Mobile: Hamburger menu with slide-in drawer
- Language toggle always visible

**Elements:**
| Element | Specification |
|---------|---------------|
| Logo | Placeholder: 120x40px |
| Nav Links | Home, About, Services, Contact |
| Language Toggle | EN / ಕನ್ನಡ (pill-style switcher) |
| CTA Button | "Book Consultation" (mobile: icon only) |

---

### 5.2 Hero Section

**Design Concept:**
Full-viewport parallax hero with layered glassmorphism elements. Medical-themed abstract shapes floating in background.

**Content:**

| Element | English | Kannada |
|---------|---------|---------|
| Greeting | "Welcome to Expert Orthopedic Care" | "ಪರಿಣಿತ ಮೂಳೆ ಚಿಕಿತ್ಸೆಗೆ ಸ್ವಾಗತ" |
| Name | Dr. Nithin KR | ಡಾ. ನಿತಿನ್ ಕೆ.ಆರ್ |
| Title | MS Orthopedics | ಎಂಎಸ್ ಆರ್ಥೋಪೆಡಿಕ್ಸ್ |
| Tagline | "Restoring Movement. Rebuilding Lives." | "ಚಲನೆಯನ್ನು ಪುನಃಸ್ಥಾಪಿಸುವುದು. ಜೀವನವನ್ನು ಪುನರ್ನಿರ್ಮಿಸುವುದು." |

**CTAs:**
1. Primary: "Book Consultation" → Scroll to Contact
2. Secondary: "View Services" → Scroll to Services

**Visual Elements:**
- Doctor photo placeholder (right side on desktop)
- Floating glass cards with stats
- Animated bone/joint iconography
- Gradient mesh background (teal → white)

**Statistics Display (Glass Cards):**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│    10+       │  │   5000+      │  │    100%      │
│   Years      │  │  Patients    │  │  Dedication  │
│ Experience   │  │   Treated    │  │   to Care    │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

### 5.3 About Section

**Layout:** Two-column (Photo | Content) on desktop, stacked on mobile

**Content Structure:**

**Left Column:**
- Professional photo placeholder
- Glass frame with subtle shadow
- Floating badge: "MS Orthopedics"

**Right Column:**

**Bio (English):**
> Dr. Nithin KR is a highly skilled Orthopedic Surgeon dedicated to providing comprehensive musculoskeletal care. With expertise in trauma, sports medicine, and joint disorders, Dr. Nithin combines advanced medical knowledge with a compassionate approach to help patients return to their active lifestyles.

**Education Timeline:**
```
EDUCATION & TRAINING
────────────────────

🎓 MBBS
   JSS Medical College, Mysuru
   
🎓 MS Orthopedics  
   Bangalore Medical College, Bangalore
```

**Philosophy Quote (Glass Card):**
> "Every patient deserves personalized care. I believe in treating the person, not just the condition."

---

### 5.4 Services Section

**Layout:** 2x2 grid on desktop, single column on mobile

**Service Cards:**

| # | Service | Icon | Description |
|---|---------|------|-------------|
| 1 | **Orthopedic Trauma** | 🦴 | Expert care for fractures, joint dislocations, and emergency orthopedic injuries with focus on optimal recovery. |
| 2 | **Spine Care** | 🔙 | Comprehensive treatment for neck pain and lower back pain using both conservative and advanced techniques. |
| 3 | **Arthritis Management** | 🤝 | Personalized solutions for multiple joint pain and arthritis to improve mobility and quality of life. |
| 4 | **Sports Medicine** | ⚽ | Specialized treatment for sports-related injuries with focus on getting athletes back to peak performance. |

**Card Design:**
- Glass effect background
- Icon (custom SVG, teal color)
- Service title (bold)
- Description (2-3 lines)
- Hover: Subtle lift + gold border accent

---

### 5.5 Credentials Section

**Layout:** Centered, badge-style display

**Content:**

**Section Title:** "Awards & Certifications"

**Placeholder Items:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [Badge 1]    [Badge 2]    [Badge 3]    [Badge 4]  │
│                                                     │
│   Award/Cert   Award/Cert   Award/Cert   Award/Cert │
│   Placeholder  Placeholder  Placeholder  Placeholder│
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Affiliations:**
- Max Multi Speciality Hospital (with logo placeholder)
- Indian Orthopaedic Association (placeholder)
- Karnataka Medical Council (placeholder)

---

### 5.6 Contact Section

**Layout:** Two columns (Form | Info + Map)

**Left Column — Contact Form:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | Text | Yes | Min 2 chars |
| Phone Number | Tel | Yes | 10 digits |
| Email | Email | No | Valid email format |
| Concern | Dropdown | Yes | Service categories |
| Message | Textarea | No | Max 500 chars |

**Concern Dropdown Options:**
- Fracture / Injury
- Back / Neck Pain
- Joint Pain / Arthritis
- Sports Injury
- General Consultation
- Other

**Submit Button:** "Send Message" with loading state

**Success Message:** "Thank you! We'll contact you within 24 hours."

---

**Right Column — Clinic Information:**

**Clinic Details:**
```
MAX MULTI SPECIALITY HOSPITAL
─────────────────────────────

📍 Address:
   NT Road, Milagatta
   Shivamogga, Karnataka 577205

📞 Phone:
   +91 98765 43210

✉️ Email:
   dr.nithin.ortho@email.com

⏰ Working Hours:
   Monday - Saturday: 10:00 AM - 6:00 PM
   Sunday: Closed
   
   Emergency: Available 24/7
```

**Google Map:**
- Embedded iframe
- Location: NT Rd, Milagatta, Shivamogga, Karnataka 577205
- Height: 300px
- Rounded corners matching design system
- "Get Directions" button below map

---

### 5.7 Footer

**Layout:** Three columns + bottom bar

**Column 1 — Brand:**
- Logo
- Tagline
- Brief description

**Column 2 — Quick Links:**
- Home
- About
- Services
- Contact

**Column 3 — Connect:**
- Phone
- Email
- Address

**Bottom Bar:**
- Copyright: "© 2024 Dr. Nithin KR. All rights reserved."
- "Designed with ❤️"

---

### 5.8 Floating WhatsApp Button

**Position:** Fixed, bottom-right corner (24px margin)

**Design:**
- Circular button (60px diameter)
- WhatsApp green (#25D366)
- White WhatsApp icon
- Pulse animation on load
- Hover: Scale up + shadow

**Behavior:**
1. Click opens WhatsApp chat widget (not external app initially)
2. Widget shows quick reply options
3. Selecting option opens WhatsApp with pre-filled message

**Quick Reply Options:**

| Option | Pre-filled Message |
|--------|-------------------|
| 📅 Book Appointment | "Hi Dr. Nithin, I would like to book an appointment. Please let me know the available slots." |
| 📍 Get Directions | "Hi, I need directions to Max Multi Speciality Hospital, Shivamogga." |
| ⏰ Know Timings | "Hi, what are the consultation timings for Dr. Nithin KR?" |
| 💬 General Inquiry | "Hi Dr. Nithin, I have a query regarding..." |

**WhatsApp Link Format:**
```
https://wa.me/919876543210?text=URL_ENCODED_MESSAGE
```

---

## 6. Multi-Language Support

### 6.1 Implementation Approach

**Method:** Client-side language switching with JSON translation files

**Structure:**
```
/locales
  ├── en.json
  └── kn.json
```

### 6.2 Language Toggle Behavior

- Default: English
- Toggle: Pill-style switch (EN | ಕನ್ನಡ)
- Persistence: localStorage
- Animation: Smooth fade transition on switch

### 6.3 Translation Coverage

| Section | English | Kannada |
|---------|:-------:|:-------:|
| Navigation | ✅ | ✅ |
| Hero | ✅ | ✅ |
| About | ✅ | ✅ |
| Services | ✅ | ✅ |
| Contact Form | ✅ | ✅ |
| Footer | ✅ | ✅ |
| WhatsApp Messages | ✅ | ✅ |

---

## 7. Technical Specifications

### 7.1 Technology Stack

| Layer | Technology | Justification |
|-------|------------|---------------|
| Framework | React 18+ / Next.js | Component-based, SEO-friendly |
| Styling | Tailwind CSS | Rapid development, consistent design |
| Animations | Framer Motion | Smooth parallax & micro-interactions |
| Forms | React Hook Form | Validation & performance |
| Maps | Google Maps Embed API | Reliable, familiar UX |
| Icons | Lucide React | Consistent, customizable |
| Fonts | Google Fonts | Playfair Display, Plus Jakarta Sans, Noto Sans Kannada |
| Deployment | Vercel / Netlify | Easy deployment, SSL included |

### 7.2 Performance Requirements

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Score | > 90 |

### 7.3 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

### 7.4 Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column |
| Tablet | 640px - 1024px | Adjusted spacing |
| Desktop | 1024px - 1280px | Two columns |
| Large Desktop | > 1280px | Max-width container |

---

## 8. SEO Requirements

### 8.1 Meta Tags

```html
<title>Dr. Nithin KR | Orthopedic Surgeon in Shivamogga</title>
<meta name="description" content="Expert orthopedic care by Dr. Nithin KR, MS Orthopedics. Specializing in trauma, sports injuries, spine care, and arthritis treatment at Max Multi Speciality Hospital, Shivamogga.">
<meta name="keywords" content="orthopedic surgeon shivamogga, bone doctor, fracture treatment, sports injury, back pain treatment, joint pain specialist">
```

### 8.2 Structured Data (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Nithin KR",
  "medicalSpecialty": "Orthopedic Surgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NT Road, Milagatta",
    "addressLocality": "Shivamogga",
    "addressRegion": "Karnataka",
    "postalCode": "577205"
  },
  "telephone": "+91-98765-43210",
  "image": "URL_TO_DOCTOR_PHOTO",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 10:00-18:00"
}
```

### 8.3 Open Graph Tags

```html
<meta property="og:title" content="Dr. Nithin KR | Orthopedic Surgeon">
<meta property="og:description" content="Expert orthopedic care in Shivamogga">
<meta property="og:image" content="URL_TO_OG_IMAGE">
<meta property="og:url" content="https://drnithinortho.com">
```

---

## 9. Accessibility Requirements

### 9.1 WCAG 2.1 AA Compliance

| Requirement | Implementation |
|-------------|----------------|
| Color Contrast | Minimum 4.5:1 ratio for text |
| Keyboard Navigation | Full tab navigation support |
| Screen Readers | ARIA labels on interactive elements |
| Focus States | Visible focus indicators |
| Alt Text | All images have descriptive alt text |
| Form Labels | All inputs have associated labels |

### 9.2 Accessible Animations

- Respect `prefers-reduced-motion` media query
- Provide static fallbacks for parallax effects

---

## 10. Content Placeholders

### 10.1 Images Required

| Image | Dimensions | Format | Notes |
|-------|------------|--------|-------|
| Logo | 240x80px | SVG/PNG | Transparent background |
| Doctor Photo (Hero) | 600x800px | JPG/PNG | Professional, white coat |
| Doctor Photo (About) | 500x600px | JPG/PNG | Can be same as hero |
| Award Badges | 100x100px | PNG | 4-6 badges |
| Affiliation Logos | 150x60px | PNG | Hospital, IOA, etc. |
| OG Image | 1200x630px | JPG | Social sharing |

### 10.2 Placeholder Strategy

During development, use:
- Geometric shapes with initials for logo
- Professional medical stock photo silhouette for doctor
- Generic badge/certificate icons for awards

---

## 11. Form Handling

### 11.1 Contact Form Submission

**Options:**

| Method | Pros | Cons |
|--------|------|------|
| **Formspree** | No backend needed, free tier | Limited customization |
| **EmailJS** | Client-side, easy setup | Requires API key |
| **Netlify Forms** | Built-in if using Netlify | Platform-specific |
| **Custom API** | Full control | Requires backend |

**Recommended:** Formspree (free, reliable, easy)

### 11.2 Form Validation

| Field | Validation Rules |
|-------|-----------------|
| Name | Required, 2-50 characters |
| Phone | Required, 10 digits, Indian format |
| Email | Optional, valid email format |
| Concern | Required, must select option |
| Message | Optional, max 500 characters |

### 11.3 Anti-Spam

- Honeypot field (hidden input)
- Rate limiting (1 submission per minute per IP)
- reCAPTCHA v3 (optional, if spam becomes issue)

---

## 12. Analytics & Tracking

### 12.1 Recommended Setup

| Tool | Purpose |
|------|---------|
| Google Analytics 4 | Traffic & behavior |
| Google Search Console | SEO monitoring |
| Microsoft Clarity | Heatmaps & recordings (free) |

### 12.2 Key Events to Track

| Event | Trigger |
|-------|---------|
| `form_submit` | Contact form submission |
| `whatsapp_click` | WhatsApp button click |
| `whatsapp_option` | Quick reply option selected |
| `language_switch` | EN ↔ Kannada toggle |
| `cta_click` | Any CTA button click |
| `section_view` | Scroll to section |

---

## 13. Deployment Checklist

### 13.1 Pre-Launch

- [ ] All placeholder content replaced
- [ ] Forms tested and working
- [ ] WhatsApp integration verified
- [ ] Map showing correct location
- [ ] Both languages complete
- [ ] Mobile responsiveness verified
- [ ] Performance audit passed (>90)
- [ ] Accessibility audit passed
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Favicon and app icons added
- [ ] 404 page created
- [ ] Contact form notifications working

### 13.2 Post-Launch

- [ ] Submit sitemap to Google
- [ ] Verify in Search Console
- [ ] Test all contact methods
- [ ] Monitor form submissions
- [ ] Check analytics data
- [ ] Social media share test

---

## 14. Future Enhancements (Phase 2)

| Feature | Priority | Description |
|---------|----------|-------------|
| Online Booking | High | Calendly or custom booking system |
| Patient Testimonials | High | Video/text reviews section |
| Blog/Articles | Medium | Health tips, orthopedic education |
| Before/After Gallery | Medium | Treatment results (with consent) |
| FAQ Section | Medium | Common questions answered |
| Video Consultation | Low | Telemedicine integration |
| SMS Reminders | Low | Appointment reminders |

---

## 15. Project Timeline (Estimated)

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Design | 3-5 days | Figma mockups, design approval |
| Development | 7-10 days | Functional website |
| Content | 2-3 days | Final content & translations |
| Testing | 2-3 days | QA, bug fixes, optimization |
| Launch | 1 day | Deployment, DNS setup |

**Total Estimated Time:** 15-22 days

---

## 16. Appendix

### A. Sample Color Application

```
Hero Background:     Linear gradient (Teal 5% → White 95%)
Glass Cards:         rgba(255, 255, 255, 0.7) + blur
Primary Buttons:     Deep Teal (#0D9488) → Dark Teal on hover
Secondary Buttons:   White + Teal border
Accent Highlights:   Warm Gold (#D4AF37)
Text Primary:        Dark Slate (#1E293B)
Text Secondary:      Slate Gray (#64748B)
Success/WhatsApp:    Green (#10B981 / #25D366)
```

### B. Animation Specifications

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Hero text | Fade up | 0.8s | ease-out |
| Stats cards | Stagger fade | 0.5s each | ease-out |
| Service cards | Scale on hover | 0.3s | ease-in-out |
| WhatsApp button | Pulse | 2s loop | ease-in-out |
| Section reveal | Fade up on scroll | 0.6s | ease-out |
| Language switch | Content fade | 0.3s | ease |

### C. Contact Information (For Development)

```
Clinic:    Max Multi Speciality Hospital
Address:   NT Road, Milagatta, Shivamogga, Karnataka 577205
Phone:     +91 98765 43210
Email:     dr.nithin.ortho@email.com
WhatsApp:  +91 98765 43210
Hours:     Mon-Sat 10:00 AM - 6:00 PM

Google Maps Coordinates: 13.9299° N, 75.5681° E (approximate)
```

---

## Document Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Client | Dr. Nithin KR | | |
| Project Manager | | | |
| Designer | | | |
| Developer | | | |

---

*End of PRD Document*
