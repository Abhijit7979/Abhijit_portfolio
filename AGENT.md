# AGENT.md

Notes for AI agents (and for Abhijit) working on this site.

## What this project is

This is **not a portfolio** — it is a website whose job is to **get leads and sell
Abhijit's time**. The old version of this site showed off skills. The current
version sells consulting.

The golden rule: **every section must push the reader one step closer to booking
a call.** If you add a section, ask "does this help someone book?" If not, do not
add it.

## The one thing that must be done before launch

There is a booking link placeholder. Until it is filled in, every "Book a call"
button on the site sends people to WhatsApp instead of a calendar.

**To fix it, open `src/data/services.ts` and find this near the top:**

```ts
export const bookingUrl = '';
```

**Put the Cal.com link between the quotes:**

```ts
export const bookingUrl = 'https://cal.com/your-name/hidden';
```

That single line fixes every booking button on the whole site at once. You do not
need to change anything else.

To get a free booking link: go to **cal.com**, sign up, create an event called
something like "AI Architecture Call", and copy its link.

---

## Plain-English build steps

Use these when someone asks "how do I run the site?" or "how do I put my changes
online?"

### 1. Install (only needed once)

```bash
cd ~/Downloads/abhi-services
npm install
```

Downloads all the code libraries the site needs.

### 2. Run it on your computer

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. Edit any file and the page
updates automatically.

### 3. Check it still works before sharing

```bash
npm run build
```

This tests the whole site. If you see the words **"Compiled successfully"** and a
list of routes, you are fine. If it fails, there is a mistake in the code.

### 4. Put your changes online

```bash
git add -A
git commit -m "short description of what you changed"
git push
```

- `git add` = select the files you changed
- `git commit` = save them with a label
- `git push` = send them to GitHub

Vercel is connected to GitHub, so **the live website updates by itself** about a
minute after `git push`. There is no separate deploy step.

### 5. Undo a change

```bash
git status          # see what is changed
git restore .       # throw away uncommitted changes
```

---

## Where things live

Everything you are allowed to change is in one folder. **If you are not sure
where something goes, it belongs in `src/data/`.**

| File | What it controls |
|------|-----------------|
| `src/data/services.ts` | **The money file.** Services offered, prices, FAQs, process steps, case studies, booking link. |
| `src/data/portfolio.ts` | Name, email, phone, location, social links. |
| `src/data/experience.ts` | Work history. |
| `src/data/skills.ts` | Technology list. |
| `src/data/projects.ts` | Projects (still on the site, lower down). |

Most day-to-day editing needs `services.ts` and `portfolio.ts` only.

### Page sections (rarely need editing)

Each section is one file in `src/components/sections/`. The order they appear in
is decided by `src/app/page.tsx`.

Current order, and why:

1. `HeroSection` — headline and first button
2. `BookingSection` — the main "book a call" block
3. `ServicesSection` — what he sells
4. `PricingSection` — prices
5. `ProofSection` — past clients
6. `ProcessSection` — how it works
7. `FaqSection` — questions
8. `ExperienceSection` — work history
9. `ContactSection` — contact details

**This order is intentional.** Pricing sits high on purpose — it filters
tire-kickers and makes the rest of the page feel trustworthy. Do not move
Pricing to the bottom without a good reason.

---

## Style rules

Match the existing code. Do not introduce new libraries.

- **Tailwind CSS** for styling. No separate `.css` files, no inline `<style>`.
- Existing colours: use the tokens `bg-background`, `text-foreground`,
  `text-muted-foreground`, `bg-primary`, `text-primary`, `border-border`,
  `bg-card`. Never hardcode a colour like `bg-blue-500`.
  (To see them: `src/app/globals.css`)
- Animations use **Framer Motion** through the existing `<FadeInView>` wrapper.
- Icons come from `lucide-react`.
- Prices: change them in `services.ts` only. Never hardcode `₹` in a component.

## Rules about content

These matter more than code style, because this site sells something real.

- **Never invent results.** No fake percentages, no "increased revenue 300%".
  Only real work from `caseStudies` in `services.ts`.
- **Never invent testimonials.** There are none.
- **Keep the phone number and email real.** WhatsApp links use the real number.
- **If a price changes**, update `pricingTiers` in `services.ts` only. All three
  price displays (services, pricing cards) read from there.

## Before you say "done"

Always actually run these. Never claim success without real output.

```bash
npx tsc -p tsconfig.json --noEmit   # no type errors
npm run build                        # site builds
```

Then open `http://localhost:3000` in a browser and check:
- No red errors in the browser console
- The booking buttons go somewhere real (WhatsApp, or the calendar after setup)
- It still looks right on a phone-sized screen

## Current status

- Site is built and working. Build passes, no console errors.
- Last commit: `ff52732` — portfolio reworked into a lead-gen consulting site.
- **Not yet pushed to GitHub.**
- **Booking link not yet set up** — the main remaining task.

## Deploying to a custom domain

The site is at `abhijit-rao.me` (linked from the social icons in
`src/data/portfolio.ts`).

- Vercel auto-deploys on every `git push`. No action needed.
- To point the domain: Vercel dashboard → Project → Settings → Domains.
- `siteUrl` in `src/app/layout.tsx` is used for SEO/canonical tags. If the
  domain changes, update it there too, or search results will point at the old
  address.
