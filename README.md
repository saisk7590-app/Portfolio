# Sai Kiran Product Engineer Portfolio

Frontend-only multi-page portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

## Folder Structure

```text
src/
  assets/
    projects/
      scrapcollector/
        mobile/
        admin/
        thumbnails/
      ams/
      subscription-tracker/
    profile/
    icons/
    backgrounds/
  components/
    layout/        # Navbar and footer
    ui/            # Reusable cards, buttons, loader, and headings
  data/            # Static content and project data
  hooks/           # Theme hook
  layouts/         # Shared app shell with navbar/footer
  pages/           # Route-level pages
  routes/          # React Router setup
  sections/        # Homepage section components
  theme/           # Shared motion variants
  utils/           # Reusable helpers like project lookups
  App.jsx
  index.css
  main.jsx
```

## Routing Architecture

- `/` home page with previews only
- `/projects` all projects showcase
- `/projects/:slug` reusable project detail page
- `/engineering` engineering concepts page
- `/contact` contact page

The route tree is defined in `src/routes/AppRouter.jsx`, and shared page chrome lives in `src/layouts/SiteLayout.jsx`.

## Reusable Project System

Project content is stored in `src/data/projects.js` as structured mock data. Each project contains:

- `slug`
- `title`
- `summary`
- `techStack`
- `architectureHighlights`
- `features`
- `screens`
- `links`

This makes it easy to add more projects later without rewriting page logic. The `/projects/:slug` page reads the slug and renders the correct case study using the same layout.

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the default Vite settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Future Improvements

- Replace placeholder screenshots with real product screens.
- Add downloadable resume support.
- Connect the contact form to an email or serverless form service.
- Add individual long-form case study writing for each project.
- Add project filters or tags on the projects page.
# Portfolio
