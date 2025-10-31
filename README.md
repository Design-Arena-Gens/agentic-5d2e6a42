## FreelanceFlow

FreelanceFlow is a modern freelancing marketplace marketing site built with Next.js App Router and Tailwind CSS. It showcases how product-led teams can discover curated talent, browse live project briefs, review featured freelancers, and explore pricing plans—with a polished, Vercel-ready presentation layer.

### Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with the new `@import "tailwindcss"` pipeline
- Lucide React icon set

### Key Sections
- Hero experience with trust metrics and escrow callouts
- Solution tracks spanning product, engineering, marketing, and operations
- Featured project briefs and curated freelancer spotlights
- Guided hiring workflow, social proof, and pricing tiers
- Responsive layout tailored for high-converting marketing experiences

### Local Development
```bash
npm install
npm run dev
```
The site will be available at `http://localhost:3000`.

### Quality Checks
```bash
npm run lint
npm run build
```
Run linting and build before deploying to ensure production readiness.

### Deployment
This project is configured for Vercel. Once you have a `VERCEL_TOKEN`, deploy with:
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-5d2e6a42
```
