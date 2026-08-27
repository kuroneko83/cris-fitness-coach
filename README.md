# Cris Boxing & Fitness

Landing page + booking site for Cris, a professional boxer and weight-loss coach in Japan.
Built with **Astro + Tailwind CSS**, i18n (**EN / JA**), booking via **Cal.com** and content editing via **Decap CMS**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Pages

| Path                | Description                          |
| ------------------- | ------------------------------------ |
| `/en`, `/ja`        | Home (hero, services, CTA)           |
| `/{lang}/services`  | Group / 1-on-1 / weight-loss program |
| `/{lang}/weight-loss` | Dedicated weight-loss page         |
| `/{lang}/about`     | Coach bio                            |
| `/{lang}/schedule`  | Weekly times + Cal.com live booking  |
| `/{lang}/testimonials` | Client testimonials (CMS-managed) |
| `/{lang}/contact`   | Gym address, socials, map placeholder|
| `/admin`            | Decap CMS panel                      |

## Setup checklist (all in `src/config.ts`)

1. **Cal.com** — create a free account at [cal.com](https://cal.com), create event types
   (`group-session`, `personal-training`, `consultation`), then set your username in
   `SITE.cal.username`. The schedule page embed updates automatically.
2. **Placeholders to replace**: gym name/address, email, social links, real photos
   (see `TODO` comments).
3. **Deploy** to Vercel (import the repo, framework preset: Astro, static output).

## Admin (Decap CMS)

1. Push the repo to GitHub (branch `main`).
2. Edit `public/admin/config.yml`: set `repo: kuroneko83/cris-fitness-coach`
   (already set) and `backend.base_url` to your deployed domain.
3. Create a GitHub OAuth App (https://github.com/settings/developers):
   - Callback URL: `https://YOUR-DOMAIN/api/oauth/callback`
4. In Vercel, set env vars `GITHUB_OAUTH_CLIENT_ID` and `GITHUB_OAUTH_CLIENT_SECRET`.
5. Set `backend.base_url` in `config.yml` to your deployed domain.
6. Visit `/admin`, log in, and manage **Testimonials** and **Blog** posts.
   Each save commits to GitHub and triggers a rebuild.

## Tech notes

- Bookings are **free to reserve** — payment is handled at the gym (per client's request).
- Weekly schedule table in `src/pages/[lang]/schedule.astro` is static; the Cal.com
  embed below it is the source of truth.
- i18n strings live in `src/i18n/ui.ts`; testimonials in `src/content/testimonials/`.
