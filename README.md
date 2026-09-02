# djgags.com

Artist site for **DJ Gags** (Gagandip Singh) — DJ, producer and remixer, New Delhi.

Astro 6 · Tailwind v4 · static output · no backend.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## How this site is put together

**Everything factual lives in [`src/data/site.ts`](src/data/site.ts).** Venues,
residencies, campuses, stats, genres, contact details, photo credits. No page
hardcodes a fact. Correcting something is a one-line edit in that file, and the
number in the stats bar and the list on `/experience` both follow.

Derived rather than typed, so they can't go stale:

- `yearsActive` — computed from `careerStart: 2000`
- `venueCount` — counted from the venue lists themselves

Pages: `/` `/about` `/mixes` `/experience` `/gallery` `/live` `/book` + 404.

## Content status

| Area | State |
|---|---|
| Bio, venues, residencies, campuses, festivals | ✅ From the official press kit |
| Contact — phone, email, Soul City | ✅ From the press kit |
| Photography | ✅ Four supplied shots wired in |
| Instagram handle | ⚠️ Guessed as `@djgags` — **confirm before launch** (`contact.instagram`) |
| Mixes | ⬜ `mixes` array is empty; page shows an honest "coming soon" until embeds are added |
| Instagram feed on `/live` | ⬜ Mount point ready, widget not connected |
| YouTube / SoundCloud | ⬜ Empty strings in `contact` — the footer icons stay hidden until filled |

### Adding mixes

Paste SoundCloud or YouTube embed URLs into the `mixes` array in `site.ts`. The
page switches from the empty state to the player rack automatically.

### Connecting the Instagram feed

In [`src/pages/live.astro`](src/pages/live.astro), replace the placeholder inside
`#instagram-feed`. Recommended: **[Behold](https://behold.so)** — it serves a
cached JSON feed, so the page does not slow down or break when Instagram
rate-limits, which is how the cheaper widgets usually fail.

## Design

Palette sampled directly from the press kit: **#FBEB06** on **#24282E**. The dark
family is cooled to match that grey. Defined once as Tailwind v4 theme tokens in
[`src/styles/global.css`](src/styles/global.css) — `gold` is the brand yellow
throughout (the token name is a holdover; the value is his actual yellow).

The site commits to one dark theme and does not follow the OS light setting. The
brand is a dark room.

Type: Bebas Neue (display) · DM Sans (body) · DM Serif Display (pull quotes), all
self-hosted via `@fontsource` — no Google Fonts request at runtime.

## Booking form

`/book` needs **no backend**. On submit it composes a pre-filled WhatsApp message
to `contact.whatsapp` — the channel event enquiries actually happen on in India,
with nothing to monitor and nothing to break. Validation is handled in-script so
the user gets one clear sentence instead of three browser bubbles.

To move to stored leads later (Supabase or Formspree), point the form's `action`
at the endpoint and delete the submit handler at the bottom of the file.

## Deploying

Static output. `wrangler.toml`, `public/_headers` and `public/_redirects` are
already configured for **Cloudflare Pages** (free, fast in India, DNS in the same
place). The git repo is initialised with `origin` set to
`github.com/vrentertainment67-coder/djgags` — it just needs creating and pushing.

### 1. Create the GitHub repo and push

Create an **empty** repo named `djgags` at https://github.com/new (no README, no
.gitignore — this repo already has both), then:

```bash
git push -u origin main
```

### 2. Connect Cloudflare Pages

Either through the dashboard — *Workers & Pages* → *Create* → *Pages* → connect
the repo, build command `npm run build`, output directory `dist` — or from here:

```bash
npx wrangler login && npx wrangler pages deploy dist --project-name=djgags
```

### 3. Point the domain

Add `djgags.com` and `www.djgags.com` in Pages → *Custom domains*, then **at
GoDaddy** change the nameservers to the two Cloudflare provides. Cloudflare
issues the certificate and writes the records itself.

`public/_redirects` already folds `www` into the apex so the SEO signals do not
fork. If you would rather leave DNS at GoDaddy, use Netlify and point GoDaddy's
`A`/`CNAME` records at it instead — but nameserver delegation is fewer moving
parts.

Update `site` in [`astro.config.mjs`](astro.config.mjs) if the domain ever
changes; it drives the sitemap and canonical URLs.

## Photo credit

`gags-hero.jpg` carries a visible watermark: **Roy Raymond Henderson
Photography**. The credit is rendered in the footer, and it is the condition on
which that image is usable — confirm clearance before launch, and don't crop the
watermark out without asking.
