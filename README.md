# Security+ SY0-701 Practice Simulator

Tablet-first interactive practice simulator for CompTIA Security+ SY0-701 study.

## Included
- 5 complete practice exams
- 90 questions per exam
- 5 interactive PBQs + 85 multiple-choice questions per exam
- Official practice weighting used in every exam: 11 / 20 / 16 / 25 / 18 questions across Domains 1–5
- Touch/S Pen-friendly drag-and-drop, tap-to-place, dropdown, diagram, sequencing, and calculation PBQs
- 90-minute timer and flag-for-review
- Exam mode and study mode
- Automatic local progress saving
- PBQ partial-credit practice scoring
- Domain-by-domain results and missed-question review
- Progressive Web App support and offline caching
- 192×192 and 512×512 Android app icons

## One-time GitHub Pages setup
This repository is a static site and is ready to publish directly from the `main` branch.

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Select **Save**.
5. Wait for GitHub Pages to finish publishing.

### Recommended repository-name cleanup
The repository was accidentally created with a trailing period (`securityplus-sy0-701-simulator.`). Before enabling Pages, rename it under **Settings → General → Repository name** to:

`securityplus-sy0-701-simulator`

This gives the clean Pages address:

`https://donvicb.github.io/securityplus-sy0-701-simulator/`

## Install on Samsung Galaxy Tab S8
1. Open the GitHub Pages site in Chrome or Samsung Internet.
2. Open the browser menu.
3. Choose **Install app** or **Add to Home screen**.
4. Launch **Security+ 701** from the home screen.
5. Open the app once while online so the service worker can cache all exam files; after that the simulator can work offline.

Exam progress and results are stored locally in the browser and are not uploaded by the simulator.

This is original practice material based on published SY0-701 objectives. It is not an official CompTIA product and does not contain real CompTIA exam questions.
