# Saker Tech admin

School admin front end with separate desks for staff, parents, students, and teachers. The dashboard covers classes, subjects, academic years, workbooks, chapters, and results. Modals for those records live in `src/components/modals`.

The package name is `sakertech-admin`. `src/pages/index.tsx` is still the default Next.js starter page. The product screens are the ones below.

## Stack

Next.js (Pages Router), React, TypeScript, Tailwind CSS, Ant Design, Redux Toolkit, Chart.js, and Axios.

## Pages

| Path | What it is |
| --- | --- |
| `/dashboard` | Staff dashboard |
| `/parents` | Parent desk |
| `/students` | Student desk |
| `/teachers` | Teacher desk |

Each role has its own side menu under `src/components/dashboard`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then go to `/dashboard`.

`npm run build` then `npm start` runs the production server. `npm run lint` checks the project.
