# NeuroExp Website

This project is the website for **NeuroExp**, a clinic focused on speech therapy and child neurodevelopment.

The website is made for families looking for information about:
- the clinic
- the team
- the children and families NeuroExp supports
- the services offered
- the clinic's approach
- contact details

## Project Goal

The main goal of this website is to present NeuroExp in a clear, warm, and professional way.

It should also be easy to update, especially the written content.

## Tech Stack

This website is built with:
- React
- Vite
- React Router
- Tailwind CSS

You do not need to know all of these tools to update basic content.

## Project Structure

The most important folders are:

### `src/pages/`

This folder contains the main pages of the website.

Examples:
- `Home.jsx` - homepage
- `Team.jsx` - team page
- `Patients.jsx` - patient information page
- `Services.jsx` - services page
- `OurApproach.jsx` - approach page
- `ContactUs.jsx` - contact page

### `src/components/`

This folder contains reusable interface pieces, such as:
- navbar
- footer
- contact form
- map
- icons
- reusable UI blocks

### `src/text/`

This folder contains the website text and content data.

This is one of the most important folders for content editing.

Examples:
- `homeText.js`
- `TeamText.js`
- `patients.js`
- `servicesText.js`
- `ourApproachText.ts`

If you want to change written content, this is often the best place to start.

## Where The Text Lives

Most of the text is kept outside the page components.

This means:
- content is separated from layout
- text is easier to update
- future translation work will be easier

For example:
- the Team page reads content from `src/text/TeamText.js`
- the Home page reads content from `src/text/homeText.js`
- the Patients page reads content from `src/text/patients.js`

## Images And Static Files

Images, PDFs, and other public assets are stored in:
- `public/`

## Styling

Styles are mainly handled with Tailwind CSS utility classes.

Global theme values and shared styles are in:
- `src/index.css`

This includes things like:
- color variables
- dark mode styles
- shared heading styles
- reusable utility classes

## Notes For Future Editing

When making changes:
- update text in `src/text/` when possible
- update layout in `src/pages/` if the structure of a page changes
- update reusable pieces in `src/components/` if the same change should appear in multiple places
- update shared styles in `src/index.css` if a style pattern is reused across the site

## Running The Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```
