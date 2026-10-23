# SpanPDH mockup — SCDOT course pages (draft)

**Status:** Design mockup / draft — **not live**.  
**Do not push GitHub Pages** until Michael asks.

## New HTML (this pass)

| File | Role |
|---|---|
| `course-scdot-bigd.html` | SCDOT BIGD 2026 course landing (4 PDH) |
| `lesson-scdot-bigd.html` | Lesson 1 player sample (8 screens + KC) |
| `quiz-scdot-bigd.html` | Sample quiz (5 of 15; includes Table 11 **any** criterion Q) |
| `course-scdot-load-rating.html` | SCDOT LRGD course landing (4 PDH) |
| `lesson-scdot-load-rating.html` | Lesson 1 player sample (8 screens + KC) |
| `quiz-scdot-load-rating.html` | Sample quiz (5 of 15; includes §6.9.3 + φc no-TN-invent) |

Also updated: `index.html` (draft SCDOT cards), `niche-inspection.html` (BIGD card).

## Source drafts (markdown)

- `/workspace/pdh-business/courses/scdot-bigd/`
- `/workspace/pdh-business/courses/scdot-load-rating/`

## Accuracy notes baked into HTML

- UW Table 11 extend to 72M = **any** criterion + BITL discretion (not “all”).
- No invented Technical Note body text (φc / TN01).
- Credit banners: PE/NICET supplemental — **NOT** FHWA/NBIS refresher.
- All pages: ribbon + `<meta name="robots" content="noindex,nofollow">`.

## Reuse

- `style.css`, `brand.js` unchanged (shared with existing mockup).
