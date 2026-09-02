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

Static output — `dist/` can go anywhere. Recommended: **Cloudflare Pages** (free,
fast in India, and DNS in the same place).

1. Push this repo to GitHub.
2. Cloudflare Pages → *Create project* → connect the repo.
   - Build command `npm run build`, output directory `dist`.
3. Add the custom domain `djgags.com` (and `www`) in Pages → *Custom domains*.
4. **At GoDaddy**, change the nameservers to the two Cloudflare gives you.
   Cloudflare then issues the certificate and points the records automatically.

If you would rather leave DNS at GoDaddy, use Netlify instead and add GoDaddy
`CNAME` / `A` records to the values Netlify shows — but nameserver delegation is
fewer moving parts.

Update `site` in [`astro.config.mjs`](astro.config.mjs) if the domain ever changes;
it drives the sitemap and canonical URLs.

## Photo credit

`gags-hero.jpg` carries a visible watermark: **Roy Raymond Henderson
Photography**. The credit is rendered in the footer, and it is the condition on
which that image is usable — confirm clearance before launch, and don't crop the
watermark out without asking.
