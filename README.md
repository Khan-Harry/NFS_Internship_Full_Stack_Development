# CodeGenius AI – Modern AI SaaS Landing Page

> Full Stack Web Development – Week 1 Assignment Project

CodeGenius AI is a modern, portfolio-worthy, fully responsive AI SaaS Landing Page built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

The application is inspired by industry leaders like OpenAI, Vercel, Stripe, Linear, and Notion. It features smooth glassmorphism aesthetics, interactive code preview studios, animated step workflows, dynamic billing toggles, responsive hamburger navigation, and micro-interactions.

---

## 🚀 Key Features & Sections

1. **Sticky Glassmorphic Navigation (`Navbar.jsx`)**: Backdrop-blur navigation bar with active section links, login/signup CTAs, and a responsive animated hamburger drawer for mobile devices.
2. **Hero Section (`Hero.jsx`)**: Large headline with smooth text gradient, product subhead, dual CTAs ("Try for Free" & "Watch Demo"), trust badges, floating stats cards, and an interactive AI code editor preview.
3. **Trusted By Grid (`TrustedBy.jsx`)**: Showcase of partner company logos (TechFlow, Acme Corp, DevPulse, CloudVertex, Nexus AI, Synthetix).
4. **Features Showcase (`Features.jsx`)**: 6 cards highlighting core capabilities (AI Code Generator, Bug Detection, Code Explanation, Documentation Generator, Smart Refactoring, Team Collaboration) with hover elevation effects.
5. **How It Works Flow (`HowItWorks.jsx`)**: 3-step workflow timeline (Prompt → AI Generation → Fast Deployment) with visual step connectors.
6. **Product Preview Studio (`ProductPreview.jsx`)**: Interactive live code editor with tab switches (JavaScript, Python, Rust), real-time AI code quality score metric, and recommendations.
7. **Pricing Section (`Pricing.jsx`)**: Monthly vs. Annual pricing toggle (20% savings badge), highlight tier badge for "Pro" (Most Popular), and complete feature checkmarks.
8. **Testimonials (`Testimonials.jsx`)**: Customer reviews with star ratings, avatars, roles, and company affiliations.
9. **Interactive FAQ Accordion (`FAQ.jsx`)**: 6 collapsible questions using Framer Motion `AnimatePresence` for smooth opening/closing transitions.
10. **High-Converting Call to Action (`CTA.jsx`)**: Banner section with gradient glow, instant email access input form, and value props.
11. **Comprehensive Footer (`Footer.jsx`)**: Quick navigation links, developer resources, social media links (GitHub, Twitter, Discord, LinkedIn), and legal documents.

---

## 🛠️ Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (`react-icons/hi2`, `react-icons/fa`)
- **Typography**: Google Fonts (Inter)

---

## 🎨 Design System Tokens

- **Primary Color**: `#4F46E5` (Indigo 600)
- **Secondary Color**: `#7C3AED` (Violet 600)
- **Accent Color**: `#06B6D4` (Cyan 500)
- **Background**: `#F8FAFC` (Slate 50)
- **Text Color**: `#111827` (Gray 900)
- **Border Radius**: `16px` (`rounded-2xl`)

---

## 📁 Folder Structure

```
d:/Projects/NFS_Internship_Full_Stack_Development/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── index.css                  # Tailwind directives & glassmorphism utilities
    ├── main.jsx                   # React DOM render root
    ├── App.jsx                    # Root App component
    ├── data/
    │   └── landingData.js         # Dummy data for features, pricing, FAQs, testimonials
    ├── components/
    │   ├── Button.jsx             # Reusable animated button component
    │   ├── Card.jsx               # Reusable glassmorphic card component
    │   ├── Navbar.jsx             # Sticky navbar with mobile drawer
    │   ├── Hero.jsx               # Hero section with animated graphics
    │   ├── TrustedBy.jsx          # Partner company logo grid
    │   ├── Features.jsx           # 6 feature cards with icons
    │   ├── HowItWorks.jsx         # 3-step interactive process
    │   ├── ProductPreview.jsx     # Code editor mockup with live tabs & metrics
    │   ├── Pricing.jsx            # Dynamic billing toggle & pricing cards
    │   ├── Testimonials.jsx       # Verified user reviews & ratings
    │   ├── FAQ.jsx                # Animated accordion Q&A
    │   ├── CTA.jsx                # High-converting email trial CTA
    │   └── Footer.jsx             # Links, social icons, & legal notices
    └── pages/
        └── Home.jsx               # Assembles all landing page sections
```

---

## 💻 Installation & Local Development

1. **Clone or navigate to project workspace**:
   ```bash
   cd d:/Projects/NFS_Internship_Full_Stack_Development
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

### Live Deployment
- Vercel Live Link: https://nfs-internship-full-stack-developme-self.vercel.app/


---

© 2026 CodeGenius AI, Inc. Built for NFS Internship Full Stack Development.
