# Content inventory — Mayesha Maliha Proma

Audit of the existing site before the personal-archive redesign.  
Sources: live content modules, routes, images, notes, and the McCall MacBain application (22 Aug 2026).  
Nothing below was deleted during the audit. Classifications follow the requested taxonomy.

## Routes inspected

| Route | What it was | Classification |
| --- | --- | --- |
| `/` | Notebook homepage (flip hero, beliefs, story, work, fake terminal, mentorship, notes, journey, archive, thank-you image) | Duplicate + Placeholder + mixed real content |
| `/academic` | Research and CV profile | Academic work / Research |
| `/academic#papers` | Publications and manuscripts | Research |
| `/academic#writing` | Medium essays + research notebook preview | Education / Research |
| `/notes` | Research notebook index (AI & Education Reflections) | Research |
| `/notes/paper-notes` | Paper-notes folder | Research |
| `/notes/research-questions` | Research-questions folder | Research |
| `/notes/field-experiment-ideas` | Empty folder | Research (empty, not fake) |
| `/notes/reflections` | Empty folder | Research (empty, not fake) |
| `/notes/rethinking-ai-evaluation-through-human-ai-interaction` | Published paper note | Research / Personal reflection |
| `/notes/adaptive-human-ai-systems-personalization-and-trust` | Published research question | Research |
| `/notes/hi-im-mayesha-maliha-proma` | Seed personal note | Personal reflection |
| `/notes/founder-story` | Seed founder note | Entrepreneurship / Personal reflection |
| `/notes/researcher` | Seed research note | Research / Personal reflection |
| `/notes/traveler` | Seed travel note | Travel / Personal reflection |
| `/notes/the-chaos-i-couldnt-ignore` | Seed founder story (Mayesha’s own words) | Entrepreneurship / Personal reflection |
| `/admin` | Private notes dashboard | Keep (not public content) |
| `/#journey` | Homepage timeline (conflicting dates) | Information requiring verification |
| `/#connect` | Thank-you illustration as contact | Placeholder / Contact information |

No dedicated `/building`, `/leadership`, `/journey`, `/travel`, or `/thoughts` routes existed.

---

## Identity and profile copy

| Item | Source | Classification | Action |
| --- | --- | --- | --- |
| Name: Mayesha Maliha Proma | Multiple | Contact information | Preserve |
| Site title “Founder, AI Researcher, PhD Applicant” | `site.js` | Information requiring verification | Soften: preparing for MASc / future PhD, not already a PhD holder |
| First-person academic bio | `profile.js` | Academic work | Rewrite new profile copy in third person; do not treat as a personal note |
| Portrait `/assets/proma-portrait.png` | Public assets | Personal / visual | Preserve; use on hero |
| Workspace illustration `/assets/Proma-Thank-you.png` | Public assets | Personal / visual | Preserve; not a photograph |
| Decorative SVGs (coffee, founder, researcher, traveler) | Public assets | Placeholder / illustration | Preserve as sketches, never as travel photos |
| Location “Japan / Bangladesh” | `profile.js` | Contact information | Preserve |
| Languages English, Bengali | `profile.js` | Education | Expand with verified Japanese (advanced) and Arabic (basic script) from application |
| `lookingFor`: “PhD opportunities…” | `profile.js` | Information requiring verification | Align with MASc Fall 2027 + future PhD path |
| CV URL `#` | `links.js` | Placeholder | Do not fake a download; CV nav → `/academic` |
| Email `proma@abroad.company` | `links.js`, application | Contact information | Preserve (professional). **[VERIFY]** separate academic email — none found |
| LinkedIn, GitHub, Scholar, DBLP, ORCID, Medium | `links.js` | Contact information | Preserve |
| Phone, Kawagoe address, family names, Instagram/Twitter | Application only | Private | Do not publish |
| Friend’s name in the hospital story | Application | Private | Do not publish |

---

## Personal writing (preserve original voice)

| Title | Date | Route | Classification | Action |
| --- | --- | --- | --- | --- |
| Hi, I'm Mayesha Maliha Proma | 2026-05-19 | `/notes/hi-im-mayesha-maliha-proma` | Personal reflection | Preserve verbatim |
| Founder | 2026-05-19 | `/notes/founder-story` | Entrepreneurship | Preserve verbatim |
| Researcher | 2026-05-19 | `/notes/researcher` | Research / Personal reflection | Preserve verbatim |
| Traveler | 2026-05-19 | `/notes/traveler` | Travel / Personal reflection | Preserve verbatim |
| The chaos I couldn't ignore | 2026-05-19 | `/notes/the-chaos-i-couldnt-ignore` | Entrepreneurship / Personal reflection | Preserve verbatim |
| Rethinking AI Evaluation Through Human-AI Interaction | 2026-08-22 | `/notes/rethinking-ai-evaluation-through-human-ai-interaction` | Research | Preserve verbatim |
| Adaptive Human-AI systems question | 2026-08-22 | `/notes/adaptive-human-ai-systems-personalization-and-trust` | Research | Preserve verbatim |

Homepage “From the notebook” could show “Loading notes…” until the client fetch finished. Seed posts already exist — treat permanent loading as a bug, not missing content.

`BlogIndexPage.jsx` existed but was **not routed**. Personal writing was only reachable from the homepage or direct slugs.

---

## Research papers and projects

| Work | Status | Classification | Notes |
| --- | --- | --- | --- |
| Essay-structure AES paper | manuscript-revision | Research | Site title differed from the verified title. Use verified QWK **0.8361 → 0.8488**. Not a causal study. Existing site also said the full-structure model outperformed the baseline across 15 prompts — keep as already-published site content about this paper. |
| RubriQ | manuscript in preparation | Research | Missing from the live site. Application: GA improved mean held-out QWK from **0.7545 to 0.7635** (resume says 0.7636). **[VERIFY]** 0.7635 vs 0.7636. GitHub: `pro-mayesha/rubriq-fr` |
| Patent summarization + KG | published, LKM@IJCAI 2024 | Research | Preserve; human evaluators preferred KG summaries in most tested cases; baseline had higher ROUGE |
| Graph-based summarization survey | published, NLPIR 2024 | Research | Preserve |
| Ongoing “causal field evaluation” card | ongoing | Research / Information requiring verification | Keep as a research direction. Do not present as a completed field experiment or formal human-subjects study |
| Fake terminal `accuracy: 94.2%` | homepage | Placeholder | Remove |
| Harvard HDSR paper by Arbour et al. | linked as “framework paper” | Research (not Mayesha’s paper) | Keep the citation; do not imply authorship |

---

## Products

| Item | Classification | Verified | Unverified |
| --- | --- | --- | --- |
| The Abroad Company | Product building / Entrepreneurship | Parent company; Mayesha is co-founder; products include AbroadMates and ApplicationMate; site `abroad.company` | Founding year conflicts: homepage 2023, experience 2022–present, application CTO from Jul 2025. **[VERIFY DATE]** |
| AbroadMates | Product building | Mentorship platform; `abroadmates.com`; mentors who have studied/applied/lived abroad | Homepage said started 2022. **[VERIFY DATE]**. Application “1M+ monthly podcast views” **[VERIFY]** — do not display |
| ApplicationMate | Product building | AI-supported application planning; `applicationmate.com` | Homepage said 2024. **[VERIFY DATE]** |
| Featured “Research Notes” card in projects | Duplicate | Points at `/notes` | Remove from selected-work product list (notes stay in Thoughts / notebook) |
| Product figures (user-provided current approx.) | Product building | ~1,500 users; >2,000 booked sessions; 210 mentors; ~2,700 universities; ~157,000 programs | Application had 200+ mentors / 2,500+ universities / 36 countries. Use the user-provided current figures. Do not call 2,000 sessions “2,000 users.” |
| 856 chatbot participants; ~50 AbroadMates users/mentors; 10 ApplicationMate closed-cohort applicants | Product building / Research | Provided for this redesign | Not previously on the site |
| Abroad News and later travel/work/relocation products | Information requiring verification | Mentioned only as future focus in the application | Do not present as shipped products |

---

## Education

| Item | Classification | Status |
| --- | --- | --- |
| BSc Digital Business and Innovation, TIU, Apr 2022 — Mar 2026 | Education | Verified (site + application). Full-tuition scholarship 2022–26 |
| Concentration Data Science and AI | Education | Verified |
| Viqarunnisa Noon School & College, Dhaka, completed 2020 / Jan 2021 | Education | Verified; application lists 2008–2020, grad 01/2021 |
| HarvardX Data Science Professional Certificate, Jul 2024 — Nov 2025 | Education | Verified (edX credential Nov 2025). Missing from live site |
| Homepage journey “2021 moved to Japan” | Information requiring verification | **Conflicts** with Apr 2022 start. Do not use 2021 as the move year |
| First semester 2022, COVID adjustment, Japanese 1A/1B | Education / Personal reflection | Application additional information. Usable in Journey, not as a grade disclosure beyond what she chose to explain |

---

## Leadership and community

| Item | Dates | Classification | Status |
| --- | --- | --- | --- |
| Women Opportunities, founder | Jan 2019 — present (application also lists through 2027) | Leadership | Verified. ~1,700 people / 12 hrs week in community section |
| Superwoman: A She Learning Platform | no dates on site | Leadership / **[VERIFY]** | Site lists it; application describes an e-learning initiative for women’s business skills. **[VERIFY]** whether Superwoman is that platform |
| TIU Data Science and Analytics Club | 2023–2026 (Apr 2023–Dec 2025 vs Sep 2023–Mar 2026) | Leadership | Verified existence; **[VERIFY]** exact date range. 150+ members; 70+ completed pathway; 30+ later joined research teams (application) |
| Bangladesh Student Association of TIU | Sep 2022 — Dec 2025 | Leadership | Missing from live site. Founded because no Bangladeshi student community existed |
| English Olympiad, Divisional Coordinator | Mar 2017 — Apr 2022 | Leadership | Site had no dates. Application: 50,000+ students / 5,000+ campus ambassadors / 70+ countries — treat as application figures |
| NCTB curriculum development | Jun 2020 — Sep 2021 (site said 2020–21) | Education / Community service | 21 assignments grades 6–8; 28 SSC/HSC; 24 Business Studies translations |
| Worldwide Organization for Charity | May 2018 — Feb 2025 | Community service | Missing from live site |
| Project Pothchola | Mar 2017 — Jan 2021 | Community service | Application only; not requested for the leadership page |
| Peer support during a friend’s crisis | Mar 2025 — Jul 2025 | Community service | Include without names or medical detail |
| Remote 11-person team (Japan, US, Canada, Bangladesh, Italy) | current | Leadership / Product building | Provided for this redesign. Not a formal human-subjects study |
| National Leadership Award, 50k+ stakeholders (2022) | 2022 | Information requiring verification | Application award line. Do not headline without more context |

---

## Work and research experience

| Item | Dates | Classification | Status |
| --- | --- | --- | --- |
| English instructor, Maple Inc., Omiya/Saitama | Apr 2026 — present (site said Mar 2026) | Education / work | **[VERIFY]** March vs April. Application: 04/2026 |
| Co-founder / product lead, The Abroad Company | **[VERIFY DATE]** | Entrepreneurship | Conflicting years |
| Independent researcher | 2026 — present | Research | Direction, not a completed PhD |
| Research assistant, Prof. Parag Kulkarni, TIU | Nov 2023 — Mar 2026 (site: four semesters) | Academic work | Verified lab; **[VERIFY]** “four semesters” vs Nov 2023–Mar 2026 |
| Teaching assistant, TIU | Sep 2024 — Jul 2025 (site: two consecutive semesters) | Academic work | Foundations of Python and IT Management; classes up to 150 students from 120 countries |
| Guidable internship | Mar 2024 | Product building | Missing from site; optional, not a homepage claim |
| Convenience-store work (7-Eleven, Lawson, FamilyMart) | May 2022 — Mar 2026 | Personal / Education (Japanese) | Journey context only; not a featured career card |

---

## Travel

| Item | Classification | Status |
| --- | --- | --- |
| ~15 countries over four university years | Travel | Verified in application |
| Named: Japan, China, Vietnam, Thailand | Travel | Verified |
| Instagram `twentiestraverse` | Travel / **[VERIFY]** public use | Not already on the site; do not add |
| Travel photographs | — | **None in the repository.** Do not invent a photo gallery. Existing traveler SVG is an illustration |
| Vietnam food / eating-with-hands reflection | Travel / Personal reflection | Verified application essay. Usable as an observation, not as a vacation caption factory |
| Homepage “Travel” nav pointed at `/#journey` | Duplicate | Journey was a career timeline, not travel |

---

## Medium essays (learning in public)

Ten beginner-friendly essays (Jul 2025), classified **Education**. Preserve as Medium links; do not copy bodies. Not Thoughts and not paper notes.

---

## Homepage beliefs, mentorship, archive, terminal

| Item | Classification | Action |
| --- | --- | --- |
| Three beliefs (build then refine; small things; everything can be learned) | Personal reflection | Preserve text in content; not a homepage section in the new structure |
| Mentorship topics + AbroadMates CTA | Product building | Fold into Building / AbroadMates; drop salesy homepage block |
| Archive cards (Proma Notes, Research Notes, Podcast, Travel) | Duplicate + Placeholder | Podcast had no episode. Notes/travel become real routes |
| Fake `research_lab.py` terminal | Placeholder | Remove |
| Side rails + notebook menu + academic nav | Duplicate | One site header |
| 500vh scroll-flip hero | Decorative | Replace with a single editorial hero |

---

## Date conflicts to keep visible in the summary

1. **The Abroad Company / product founding years** — 2022, 2023, 2024, and Jul 2025 all appear. **[VERIFY DATE]**
2. **Move to Japan** — homepage 2021 vs education Apr 2022. Use **2022**.
3. **English instructor start** — March vs April 2026. **[VERIFY]**
4. **TIU Data Science club dates** — two ranges in the application. **[VERIFY]**
5. **RubriQ QWK end value** — 0.7635 vs 0.7636. **[VERIFY]**
6. **Academic email** — not found. **[VERIFY]**
7. **Superwoman** vs the e-learning initiative. **[VERIFY]**
8. **AbroadMates podcast reach.** **[VERIFY]** — omit from the public site

---

## Preserve / remove / add (implementation checklist)

**Preserve:** all real notes; research notebook folders; papers; GitHub/Scholar/product links; portrait; thank-you illustration; decorative SVGs as sketches; Medium list; `/academic`; `/notes` and every existing slug; `/admin`; leadership facts already on the site.

**Remove from public view (not from git history):** fake terminal; podcast card; permanent “Loading notes…”; unused `#` CV download as a fake file; duplicate nav; 2021 Japan-move year; stronger-than-evidence claims; private application fields.

**Add:** homepage as personal landing; `/building`; `/leadership`; `/journey`; `/travel`; `/thoughts`; RubriQ; product-research and remote-team sections; HarvardX; BSA; WOC; peer-support (no names); verified journey stories; travel field notes without fake photos.
