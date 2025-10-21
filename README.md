
# CHIPINGE RISE - Ready-to-upload package

This package is a Vite + React + Tailwind project prepared for quick upload to Vercel.

**Important:** The contact form is configured to use Formspree. You need to create a free Formspree form and replace the `FORM_ACTION` value in `src/App.jsx` with your Formspree endpoint (instructions below).

## Quick deploy (no Git required)

1. Download this ZIP and keep it on your computer.
2. Go to https://vercel.com -> New Project -> Import -> Upload Project
3. Upload the ZIP. Vercel will detect the project and install dependencies automatically.
4. After deploy, open the provided `.vercel.app` URL.

## Formspree setup (to receive contact emails at levi.raphael@outlook.com)
1. Create a free account at https://formspree.io and create a new form.
2. Copy the provided form endpoint (looks like `https://formspree.io/f/xxxxxx`).
3. Replace the `FORM_ACTION` constant in `src/App.jsx` with that endpoint.
4. Test the contact form on the live site.

## Notes
- If you want to connect a custom domain (chipingerise.com), add it in Vercel -> Project -> Settings -> Domains and follow DNS steps.
- This project uses Tailwind; Vercel will build it fine using the included config.

