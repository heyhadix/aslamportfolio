# Aslam Sharif Mohammed - Salesforce Technical Architect Portfolio

Professional portfolio website for Aslam Sharif Mohammed, a Salesforce Technical Architect and Agentforce Specialist. The site showcases expertise, projects, certifications, and experience with a modern, code-centric design featuring Salesforce blue accents.

**Domain:** aslam.in  
**Tech Stack:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

## 🚀 Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** for styling (dark mode default, light mode toggle)
- **Framer Motion** for smooth animations
- **Lucide React** for icons
- **next-themes** for theme management

## ✨ Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Dark/Light Mode**: Seamless theme toggle functionality
- **Sticky Navigation**: Smooth scrolling to different sections
- **Animated Typing Text**: Dynamic subtitle in Hero section
- **Animated Counters**: Quick stats bar with animated number counters
- **Filterable Projects**: Filter projects by category (Salesforce, AI, Full-Stack, etc.)
- **Certifications Timeline**: Vertical timeline showcasing certifications and achievements
- **Blog Section**: Latest articles with thumbnails and read more links
- **Salesforce Integration**: Contact form creates Leads directly in Salesforce
- **SEO Optimized**: Complete meta tags and OpenGraph configuration
- **Custom 404 Page**: Professional error page with navigation options

## 📐 Project Structure

```
aslam-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Salesforce Lead creation API
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # Custom 404 page
│   └── globals.css               # Global styles
├── components/
│   ├── Hero.tsx                  # Hero section with stats
│   ├── About.tsx                  # About section (2-column layout)
│   ├── Certifications.tsx        # Certifications timeline
│   ├── ProjectsShowcase.tsx      # Filterable projects grid
│   ├── Blog.tsx                  # Latest blog posts
│   ├── Contact.tsx               # Contact form with validation
│   ├── Navbar.tsx                # Sticky navigation
│   ├── BackToTopButton.tsx       # Scroll to top button
│   └── Footer.tsx                # Footer component
├── data/
│   ├── projects.json             # Project data
│   ├── certifications.json       # Certification data
│   └── blog.json                 # Blog post data
├── public/
│   ├── images/
│   │   ├── profile.jpg           # Profile photo
│   │   ├── projects/             # Project screenshots
│   │   └── certifications/       # Certification badges
│   └── resume/                   # Resume PDF
└── tailwind.config.ts            # Tailwind configuration
```

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#1F4E78` - Header background, primary buttons
- **Primary Medium**: `#2E5C8A` - Section headers, accents
- **Primary Light**: `#0563C1` - Links, hover states
- **Accent**: `#00A1E0` - Salesforce Lightning blue

### Typography
- **Headings**: Inter (700-800 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

## 📋 Sections

1. **Hero Section**: Full viewport with animated typing text, profile photo, CTA buttons, and quick stats bar
2. **About Section**: 2-column layout with professional image and social links
3. **Certifications & Achievements**: Vertical timeline with Trailhead widget
4. **Featured Projects**: Filterable grid with category tags and tech stack icons
5. **Latest Articles**: Blog posts with thumbnails and read more links
6. **Contact Section**: 2-column layout with Salesforce Lead integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone [your-github-repo-link]
   cd aslam-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file with your Salesforce credentials:
   ```bash
   # Salesforce Credentials
   SF_CLIENT_ID=your_connected_app_client_id
   SF_CLIENT_SECRET=your_connected_app_client_secret
   SF_USERNAME=your_salesforce_username
   SF_PASSWORD=your_salesforce_password
   SF_SECURITY_TOKEN=your_security_token

   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🔧 Salesforce Integration Setup

To enable the contact form to create Leads in Salesforce:

1. **Create a Connected App in Salesforce**:
   - Setup → App Manager → New Connected App
   - Enable OAuth Settings
   - Set Callback URL: `https://yourdomain.com`
   - Select OAuth Scopes: "Full access (full)"
   - Save and note the Consumer Key and Consumer Secret

2. **Get Security Token**:
   - Setup → My Personal Information → Reset My Security Token
   - Check your email for the security token

3. **Add Environment Variables**:
   - Add all credentials to `.env.local` (see Installation step 3)

4. **Test the Integration**:
   - Submit the contact form
   - Check your Salesforce org for the new Lead

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project into [Vercel](https://vercel.com/) from your Git provider
3. Add environment variables in Vercel dashboard:
   - `SF_CLIENT_ID`
   - `SF_CLIENT_SECRET`
   - `SF_USERNAME`
   - `SF_PASSWORD`
   - `SF_SECURITY_TOKEN`
   - `NEXT_PUBLIC_GA_ID` (optional)
4. Deploy! Vercel will automatically detect Next.js and deploy

### Domain Setup

1. Point `aslam.in` to Vercel nameservers
2. Add domain in Vercel dashboard
3. SSL certificate is automatically enabled

### Low-memory deployment (e.g. AWS t3.small, 2GB RAM)

The app is tuned to stay under ~1GB RAM to avoid OOM kills when running next to MySQL, PHP-FPM, and Nginx.

**What’s in place:**

- **Standalone build** – `output: 'standalone'` in `next.config.js` so only a minimal server bundle runs in production.
- **No production source maps** – Lowers memory use.
- **Node heap limit** – `NODE_OPTIONS=--max-old-space-size=768` (768MB) so Node doesn’t grow past that.
- **PM2 memory cap** – `max_memory_restart: "900M"` so PM2 restarts the process before the system runs out of memory.
- **Lazy-loaded API deps** – Nodemailer is loaded only when the contact form is used.

**Deploy with PM2 (standalone):**

1. In `ecosystem.config.json`, set `cwd` to your server path to the **standalone** folder, e.g. `/home/forge/your-domain.com/.next/standalone` (replace `your-domain.com` with your actual app directory name).
2. On the server:
   ```bash
   npm ci
   npm run build
   ```
   This builds and copies `public/` into `.next/standalone/` via the postbuild script.
3. Start with PM2:
   ```bash
   pm2 start ecosystem.config.json
   ```
   The app runs `server.js` from the standalone folder with a 768MB Node heap and PM2 restarts it if it exceeds 900MB.

**If you prefer `next start`** (no standalone): keep your current PM2 config but set `env.NODE_OPTIONS: "--max-old-space-size=768"` and `max_memory_restart: "900M"` so the process is capped and restarted before OOM.

**Optional:** On Linux servers, you can remove the optional dependency `@next/swc-wasm-nodejs` from `package.json` so the runtime uses native SWC only (saves memory). Re-run `npm install` after removing it.

## 🎯 Customization

### Update Content
- **Projects**: Edit `data/projects.json`
- **Certifications**: Edit `data/certifications.json`
- **Blog Posts**: Edit `data/blog.json`
- **Profile Info**: Update `components/About.tsx` and `components/Hero.tsx`

### Update Images
- Replace placeholder images in `public/images/`:
  - `profile.jpg` - Professional headshot (500x500px minimum)
  - `projects/*.png` - Project screenshots (1920x1080px)
  - `certifications/*.png` - Certification badge images

### Update Colors
- Modify `tailwind.config.ts` to change color palette
- Primary colors are defined in the `colors` section

### Update Links
- **GitHub**: Update links in `components/Hero.tsx` and `components/About.tsx`
- **LinkedIn**: Update in `components/About.tsx` and `components/Contact.tsx`
- **Trailblazer**: Update in `components/Certifications.tsx`
- **Calendly**: Update in `components/Contact.tsx`

## 📊 Performance Optimization

- Image optimization using Next.js `Image` component
- Code splitting (automatic with Next.js)
- Lazy loading for images and components
- SEO meta tags and OpenGraph images

## 🔍 SEO

The site includes:
- Complete meta tags in `app/layout.tsx`
- OpenGraph tags for social media sharing
- Structured data ready for implementation
- Semantic HTML throughout

## 📝 License

This project is private and proprietary.

## 👤 Author

**Aslam Sharif Mohammed**
- Email: aslamkemu@gmail.com
- LinkedIn: [linkedin.com/in/aslam-sharif-mohammed-36988911a](https://linkedin.com/in/aslam-sharif-mohammed-36988911a)
- GitHub: [github.com/aslamkemu](https://github.com/aslamkemu)
- Trailblazer: [trailblazer.me/id/aslamkemu](https://trailblazer.me/id/aslamkemu)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
