# GaadiBook — explainer site

A standalone marketing / explainer page for **GaadiBook**, the vehicle-document
compliance tracker for small Indian transporters, cab and auto owners.

> **Never miss a renewal again.** — Rs 299/mo

This is **not** the application. It's a single, self-contained landing page that
explains the product to (a) a non-technical SMB owner and (b) an investor
skimming for 30 seconds.

## The product, in one line

Insurance, PUC, fitness, permit, road tax and DL are all pure downside — one
lapse means a challan or an impound. GaadiBook puts every document on a single
expiry calendar, scores each vehicle by the cost of a lapse, and fires staged
reminders (T-30 / 15 / 7 / 1 and expired) so you renew in time.

## Files

| File          | Purpose                                                        |
|---------------|----------------------------------------------------------------|
| `index.html`  | All page content and structure                                 |
| `styles.css`  | Complete stylesheet (amber-signal palette, number-plate mono)  |
| `app.js`      | Sticky nav, smooth scroll, hero countdown micro-interaction    |
| `favicon.svg` | Inline SVG number-plate icon                                   |

## Running it

Fully self-contained — no build step, no dependencies, no CDNs, no external
fonts or images. Just open the file:

```
open index.html
```

Or serve the folder with any static server:

```
python3 -m http.server 8000
```

Deploys to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3)
unchanged — just upload the folder.

## Design notes

- **Amber (#D97706) as a signal, not decoration.** The accent doubles as the
  product's real urgency colour — the same amber that means "expiring soon" in
  the dashboard runs through the hero and chips.
- **Number-plate mono** (`HR 26 DK 1234`) is the typographic signature, tying
  the page to the RTO-paperwork world the product lives in.
- Cool paper background + warm near-black ink for strong, calm contrast.
- Responsive to mobile with no horizontal scroll; the dashboard table scrolls
  inside its own container. Keyboard focus is visible and reduced-motion is
  respected.

---

A KARYA studio build · contact **sreeni.nintendo@gmail.com**
