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

Pages: `/` `/about` `/mixes` `/experience` `/gallery` `/instagram` `/book` + 404.
(`/live` was the old name for `/instagram`; `public/_redirects` 301s it.)

## Content status

| Area | State |
|---|---|
| Bio, venues, residencies, campuses, festivals | ✅ From the official press kit |
| Weddings track | ⚠️ Confirmed verbally by the client; the press kit evidences none, so that copy cites no venues or counts |
| Contact — phone, email, Soul City | ✅ From the press kit |
| Photography | ✅ Four supplied shots wired in — but WhatsApp-compressed; get originals |
| Logo | ✅ Raster crop from the press kit (no vector exists); a true vector redraw would be sharper |
| Instagram handle | ✅ `@djgagsofficial`, confirmed by the client |
| Mixes | ⬜ `mixes` array is empty; page shows an honest "coming soon" until embeds are added |
| Instagram feed on `/instagram` | ✅ Behold widget wired (feed `xbKVMdkYSAiR4l94BxqO`) — the feed's **domain whitelist** in the Behold dashboard must list every host it is served from, or the feed returns 403 `notWhitelisted` |
| YouTube / SoundCloud | ⬜ Empty strings in `contact` — the footer icons stay hidden until filled |

### Adding mixes

Paste SoundCloud or YouTube embed URLs into the `mixes` array in `site.ts`. The
page switches from the empty state to the player rack automatically.

### The Instagram feed

`/instagram` embeds a [Behold](https://behold.so) widget, under a profile header that hydrates from the same feed (handle, bio, avatar, follower count) so it can never drift from Instagram. Every write there is guarded — if the request fails, the static fallbacks stand. Behold serves a cached feed,
so Instagram rate-limiting degrades that section rather than breaking the page.
Layout, post count and the domain whitelist are configured in the Behold
dashboard — only the feed id lives in this repo.

The loader carries `is:inline` so Astro does not bundle a third-party script that
expects to run untouched.

**If the grid renders empty**, check the browser console for a 403 with
`errorCode: "notWhitelisted"`. That means the host serving the page is missing
from the feed's *Advanced → domain whitelist* in Behold. It must list every host
the site is served from — the apex **and** the `*.workers.dev` fallback.

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

**Live now:** https://djgags.vrentertainment67.workers.dev

Deployed as an **assets-only Worker** (Workers Static Assets), configured in
[`wrangler.jsonc`](wrangler.jsonc). Wrangler steers all new projects to Workers
rather than Pages, so that is the target here. There is no `main` script —
Cloudflare serves `dist/` directly.

### Redeploying

```bash
npm run build && npx wrangler deploy
```

That is the whole loop. This is a direct-upload Worker, so pushing to GitHub does
**not** trigger a deploy; run the command above. To get auto-deploy on push
instead, connect the repo under *Workers & Pages* → the `djgags` Worker →
*Settings* → *Builds*.

### Pointing djgags.com at it

The domain is registered at GoDaddy and the zone is not yet on Cloudflare, so
this part has to happen in the dashboard:

1. Cloudflare dashboard → *Add a site* → `djgags.com`.
2. Cloudflare gives you two nameservers. At GoDaddy: *My Products* → domain →
   *Nameservers* → *Change* → *I'll use my own*, and enter both. Propagation is
   usually under an hour.
3. Once the zone is active: the `djgags` Worker → *Settings* → *Domains & Routes*
   → *Add* → *Custom domain* → `djgags.com`. The certificate is issued
   automatically.

### The www → apex redirect

Workers Static Assets rejects absolute URLs in `_redirects`, so this cannot live
in the repo. After the zone is active, add a zone-level **Redirect Rule**:
*Rules* → *Redirect Rules* → *Create*, matching `hostname eq "www.djgags.com"`,
dynamic redirect to `concat("https://djgags.com", http.request.uri.path)`, status
301. Without it, only the apex resolves.

### Headers

[`public/_headers`](public/_headers) **is** honoured by Workers Static Assets and
is verified live: `immutable` year-long caching on `/_astro/*` (filenames are
fingerprinted), a week on `/images/*`, plus `X-Content-Type-Options`,
`Referrer-Policy`, `X-Frame-Options` and `Permissions-Policy` on everything.

Update `site` in [`astro.config.mjs`](astro.config.mjs) if the domain ever
changes; it drives the sitemap and canonical URLs.

## Photo credit

`gags-hero.jpg` carries a visible watermark: **Roy Raymond Henderson
Photography**. The credit is rendered in the footer, and it is the condition on
which that image is usable — confirm clearance before launch, and don't crop the
watermark out without asking.
