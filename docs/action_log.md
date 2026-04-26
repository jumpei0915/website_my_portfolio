## 2026-04-26

### Link Homepage Project Cards To Detail Sections

- Issue/task: Each analytics project card on the homepage should link to its matching section on the analytics projects page.
- Action taken: Converted homepage carousel cards into links, added matching project section IDs/content on English and Japanese project pages, and added a small hover/focus style for linked cards.
- Files changed: `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed locally; targeted checks confirm each homepage card href has a matching destination ID.

### Add Project Images To Homepages

- Issue/task: Show the updated project images on the top page.
- Action taken: Replaced homepage project-card portrait placeholders with the new project images, aligned the visible card titles/copy with the current analytics projects, updated square image framing, and kept Japanese project links pointed at the projects page without stale anchors.
- Files changed: `src/index.html`, `src/index-jp.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed locally; project detail pages still need separate content alignment.

### Revise Relocation Optimization Model

- Issue/task: Project 5 should use job-title embeddings for role distance and ideal-path optimization, not career path clustering.
- Action taken: Rewrote the problem, model, impact, and page copy to focus on distance between employees and roles, distance to the ideal future position, and minimizing the path to that ideal role.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Add Relocation Optimization AI Project

- Issue/task: Add a fifth analytics project for a WIP relocation optimization AI concept.
- Action taken: Added `Project 5: Relocation Optimization AI` with WIP status and content based on career path clustering, job embeddings, and Markov-based sequence patterns from the provided abstract.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Add Security Review AI Agent Project

- Issue/task: Add a fourth analytics project for an AI agent that responds to security review requests.
- Action taken: Added `Project 4: Security Review AI Agent` with problem, model, impact, and page copy, including the corrected 60% correct answer ratio.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Generalize Driver Analysis Project

- Issue/task: Project 3 should describe a general driver analysis framework rather than attrition-only analysis.
- Action taken: Renamed Project 3 to `Driver Analysis Framework` and rewrote its problem, model, impact, and page copy around categorical HR data, ad hoc client requests, configurable target variables, and tailored cleansing.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Polish Analytics Project Impact Lines

- Issue/task: Improve the wording of analytics project `Impact` lines without making them longer.
- Action taken: Rewrote the impact statements for the current analytics projects to be shorter and more polished.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Update Labor Cost Simulation Model

- Issue/task: Clarify the Labor Cost Simulation Framework model approach.
- Action taken: Updated Project 2 to describe an EBM-based labor cost simulation model using simulated headcount, and aligned the page copy with that approach.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Simplify Analytics Project Model Fields

- Issue/task: Reduce overlap between `Model` and `Page Copy` in the analytics projects source doc.
- Action taken: Shortened the Headcount Simulation Framework and Labor Cost Simulation Framework `Model` fields while keeping fuller explanations in `Page Copy`.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Add Labor Cost Simulation Project

- Issue/task: Split labor cost simulation into its own analytics project and remove labor cost wording from the Headcount Simulation Framework.
- Action taken: Added `Project 2: Labor Cost Simulation Framework`, renumbered Attrition Driver Analysis to Project 3, and revised the Headcount impact/page copy to focus on workforce size forecasting.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Specify Headcount Simulation Model

- Issue/task: Add more accurate model details to the Headcount Simulation Framework documentation.
- Action taken: Updated the model and page copy to describe a Markov-chain-based workforce simulation model, join/resignation/internal transition events, more than five employee attributes, and 10,000+ employee scale.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Rename Analytics Project Built Field

- Issue/task: Rename the analytics project documentation field from `Built` to `Model`.
- Action taken: Updated the remaining `### Built` headings in `docs/analytics_projects.md` to `### Model`.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Polish Headcount Project Problem

- Issue/task: Make the revised Headcount Simulation Framework problem statement more professional.
- Action taken: Rewrote the sentence to describe slow forecasting processes, weak probability assumptions, and difficulty accounting for uncertainty in workforce planning.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Update Headcount Project Problem

- Issue/task: Revise the Headcount Simulation Framework problem statement in the analytics projects source doc.
- Action taken: Replaced the previous HR leader forecasting sentence with the new wording about slow work, unstable/invalid probability foundation, and uncertainty.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Simplify Analytics Projects Content Doc

- Issue/task: Remove unwanted fields from the analytics project documentation.
- Action taken: Removed the `Tech` and `Assets And Links` sections from each project entry in `docs/analytics_projects.md`.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed.

### Create Analytics Projects Content Doc

- Issue/task: Create a dedicated analytics project documentation file based on the current project content in `docs/actual_content.md`.
- Action taken: Added `docs/analytics_projects.md` with structured sections for each current analytics project, including problem, built, tech, impact, page copy, and asset/link placeholders.
- Files changed: `docs/analytics_projects.md`, `docs/action_log.md`
- Status: Completed; future content edits can start from the new analytics projects source doc.

### Rename Homepage Project Heading

- Issue/task: Rename the homepage project section heading from `Featured Projects` to `Analytics Projects`.
- Action taken: Updated the homepage section heading text.
- Files changed: `src/index.html`, `docs/action_log.md`
- Status: Completed locally; commit and deploy are needed for production.

### Normalize Homepage Index URL

- Issue/task: The deployed homepage still showed `/index.html` in the browser address bar after the visual updates were reflected.
- Action taken: Added a small shared script rule that replaces `/index.html` with `/` in browser history without reloading, and versioned `script.js` references so the new behavior is fetched.
- Files changed: `src/script.js`, `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed locally; commit and deploy are needed before production reflects this URL normalization.

### Fix Static Asset Cache And Home URL

- Issue/task: Recent icon and heading-size changes did not appear on the deployed site, and clicking home changed the URL to `/index.html`.
- Action taken: Added query-string versions to `style.css` and `header.js` references across HTML pages to force fresh static assets, and changed the English home route from `./index.html` to `./`.
- Files changed: `src/header.js`, `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed locally; commit and deploy are needed before production reflects this cache-busting update.

### Align Header Contact Icons

- Issue/task: Make the header contact icons visually consistent after the self-made X icon looked weak.
- Action taken: Replaced the X, Email, and LinkedIn inline SVGs with filled icon shapes and updated the shared icon CSS to render filled icons.
- Files changed: `src/header.js`, `src/style.css`, `docs/action_log.md`
- Status: Completed; targeted source checks confirm the filled SVG/CSS rules are in place.

### Reduce Homepage Intro Heading Size

- Issue/task: Make the homepage intro heading text slightly smaller.
- Action taken: Added a homepage-specific `.hero-split h1` font-size rule so the intro heading shrinks without changing page-level headings elsewhere.
- Files changed: `src/style.css`, `docs/action_log.md`
- Status: Completed; targeted CSS check confirms the new heading rule is in place.

## 2026-04-24

### Standardize Contact Email

- Issue/task: Replace the old Gmail address with `work@jumpeikato.com` in the remaining content source documents.
- Action taken: Updated `docs/resume.md` and `docs/actual_content.md` to use `work@jumpeikato.com`, matching the active site header and homepage CTA links.
- Files changed: `docs/resume.md`, `docs/actual_content.md`, `docs/action_log.md`
- Status: Completed; the old Gmail address no longer appears in `src/` or `docs/`.

### Add Header Contact Icons

- Issue/task: Replace the shared header `Contact` text link with icon links for `X`, `Email`, and `LinkedIn`, and use the provided contact values.
- Action taken: Added self-made inline SVG icons and a centralized contact-link block in `src/header.js`, styled the icon links in `src/style.css`, and updated the homepage `Contact` CTA email links to `work@jumpeikato.com`.
- Files changed: `src/header.js`, `src/style.css`, `src/index.html`, `src/index-jp.html`, `docs/action_log.md`
- Status: Completed; the shared header now renders `X`, `Email`, and `LinkedIn` icon links instead of a `Contact` label.

### Add Contact Values To WIP

- Issue/task: Store the actual contact values in the workflow notes for the upcoming contact update.
- Action taken: Added the provided `X`, `Email`, and `Linkedin` values under the `Edit contact` item in the `WIP` section of `docs/workflow.md`.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed.

### Add Contact Update To WIP

- Issue/task: Update the workflow tracker with the next contact-related work items.
- Action taken: Added `Edit contact` under the `WIP` section in `docs/workflow.md` with notes for storing contact links and replacing the header contact label with `X`, `Email`, and `Linkedin` icons.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed.

### Move Webpage Content Restructure To Done

- Issue/task: Update the workflow tracker to mark the webpage content restructure item as completed.
- Action taken: Moved `Resstructure the webpage content` from the `WIP` section to the `Done` section in `docs/workflow.md`.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed.

### Move Page URL Check To Done

- Issue/task: Update the workflow tracker to mark the page URL check as completed.
- Action taken: Moved `Check the page url` from the `WIP` section to the `Done` section in `docs/workflow.md`.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed.

### Centralize Shared Header Rendering

- Issue/task: Remove duplicated header HTML across the English and Japanese pages and keep one simple shared header source.
- Action taken: Added `src/header.js` to render the header from `data-page` and `data-lang` values, replaced the hard-coded header blocks in all six HTML pages with a single `site-header` mount point, and updated `src/script.js` to target the injected mobile menu by `id`.
- Files changed: `src/header.js`, `src/script.js`, `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed; header navigation is now controlled from one shared file and the current nav structure remains `Home`, `Analytics Project`, `EN/JP`, `Resume`, and `Contact`.

### Remove Other Project From Navigation

- Issue/task: `Other Project` is not ready yet and should be removed from the current site navigation until a real destination exists.
- Action taken: Removed `Other Project` from the desktop and mobile header navigation on all English and Japanese home, projects, and resume pages.
- Files changed: `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed; current header navigation now shows `Home`, `Analytics Project`, `EN/JP`, `Resume`, and `Contact`.

### Remove Remaining Email And PDF Labels

- Issue/task: The user still saw visible `Email` and `PDF` labels after the header label update and wanted the UI text aligned with the requested navigation wording.
- Action taken: Changed the homepage CTA label from `Email` to `Contact` on the English and Japanese home pages, and changed the resume-page CTA label from `Open PDF Resume` to `Open Resume` on the English and Japanese resume pages.
- Files changed: `src/index.html`, `src/index-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed; no remaining visible `Email` or `PDF` labels were found in `src/*.html`.

### Update Header Navigation Labels

- Issue/task: Change the site header structure so the left side shows `Home`, `Analytics Project`, and `Other Project`, while the right side shows `EN/JP`, `Resume`, and `Contact`.
- Action taken: Updated the shared header markup across the English and Japanese home, projects, and resume pages; replaced the previous right-side `Email` and `PDF` links with `Resume` and `Contact`; and kept the new project labels mapped to the existing projects pages for now.
- Files changed: `src/index.html`, `src/index-jp.html`, `src/projects.html`, `src/projects-jp.html`, `src/resume.html`, `src/resume-jp.html`, `docs/action_log.md`
- Status: Completed; `Analytics Project` and `Other Project` currently point to the existing projects pages until separate destinations are defined.

## 2026-04-22

### Fix GitHub Pages Token Scope

- Issue/task: `tofu apply` created the Cloudflare DNS record but failed when enabling GitHub Pages on the new repository.
- Action taken: Confirmed from the apply output that `cloudflare_dns_record.pages_subdomain[0]` was created successfully and the remaining error was `POST /repos/jumpei0915/website_my_portfolio/pages: 403 Resource not accessible by personal access token`.
- Files changed: `docs/action_log.md`
- Status: Open; GitHub token needs additional repository permission for Pages before rerunning `tofu apply`.

## 2026-04-21

### Switch OpenTofu To Create Repo

- Issue/task: User wants OpenTofu to create the GitHub repository instead of importing an existing one.
- Action taken: Removed the active GitHub repository import by deleting `infra/opentofu/imports.tf` and updated `infra/opentofu/README.md` so the default flow creates the repo from scratch while keeping Cloudflare imports as optional.
- Files changed: `infra/opentofu/imports.tf`, `infra/opentofu/README.md`, `docs/action_log.md`
- Status: Completed; the default OpenTofu flow now assumes the GitHub repo does not exist yet.

### Align OpenTofu Docs With jumpei0915 Account

- Issue/task: Use `jumpei0915` instead of `jumpei-art` for the OpenTofu GitHub setup and remove stale example references.
- Action taken: Updated `infra/opentofu/terraform.tfvars.example` to default to `jumpei0915/website_my_portfolio` and corrected `infra/opentofu/README.md` references for the target repository, import example, and GitHub Pages CNAME target.
- Files changed: `infra/opentofu/terraform.tfvars.example`, `infra/opentofu/README.md`, `docs/action_log.md`
- Status: Completed; active `terraform.tfvars` and `imports.tf` were already pointing at `jumpei0915/website_my_portfolio`.

### Inspect OpenTofu GitHub Auth Path

- Issue/task: Determine which GitHub identity the OpenTofu setup will use and whether it depends on the current `gh` login.
- Action taken: Reviewed `infra/opentofu/providers.tf`, `terraform.tfvars`, `imports.tf`, and `README.md`; checked Git remotes and whether GitHub-related environment variables are exported. Confirmed the config uses the `integrations/github` provider with `owner = var.github_owner`, the repo target is `jumpei0915/website_my_portfolio`, and no `GITHUB_TOKEN` or `GH_TOKEN` is currently exported in the shell.
- Files changed: `docs/action_log.md`
- Status: Inspection completed; OpenTofu will target the configured owner/repo and authenticate via GitHub provider credentials rather than the Git remote.

## 2026-04-20

### OpenTofu Binary Path Check Failed

- Issue/task: Validate the OpenTofu scaffold using the expected binary path `/home/jumpei/bin/tofu`.
- Action taken: Ran `/home/jumpei/bin/tofu version` and `/home/jumpei/bin/tofu fmt -check -recursive`; both failed because the executable does not exist. Checked `/home/jumpei/bin`, PATH, and `/home/jumpei` search; only `/home/jumpei/bin/tofu_linux_amd64.zip` was found.
- Files changed: `docs/action_log.md`
- Status: Blocked until the real `tofu` binary path is provided or the binary is extracted/installed outside Codex.

### Scaffold OpenTofu GitHub Pages Infrastructure

- Issue/task: Start a fresh OpenTofu project for managing GitHub Pages under a Cloudflare-hosted custom domain and prepare for importing existing parts.
- Action taken: Added `infra/opentofu` with GitHub and Cloudflare providers, GitHub Pages workflow-mode repository config, an active import block for the existing `sample_repo` GitHub repository, Cloudflare DNS records for subdomain or apex domains, Cloudflare import examples, variable examples, usage docs, and a GitHub Actions Pages deployment workflow for `src/`.
- Files changed: `infra/opentofu/*`, `.github/workflows/deploy-pages.yml`, `.gitignore`, `docs/action_log.md`
- Status: Scaffold completed; real domain, Cloudflare zone ID, DNS record IDs, and credentials still need to be supplied before import/apply.

### Reflect Actual Content In HTML

- Issue/task: Update the portfolio HTML to use the finalized content outline and resume-derived actual content.
- Action taken: Replaced placeholder HTML with sections for About Me, Academic History, Work History, Projects, Tech Stack, and Contact; added small CSS support for content grids and tech stack rows.
- Files changed: `src/index.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed.

### Add Work History And Academic Dates

- Issue/task: Add date details to Academic History and include Work History as a portfolio content section.
- Action taken: Updated the Project Overview outline to include Work History, changed academic entries to explicit completion dates, and added resume-based work history content.
- Files changed: `docs/project_overview.md`, `docs/actual_content.md`, `docs/action_log.md`
- Status: Completed.

### Remove Resume Section From Content

- Issue/task: Remove Resume as a standalone website section.
- Action taken: Confirmed `docs/project_overview.md` no longer lists Resume and removed the Resume block from `docs/actual_content.md`.
- Files changed: `docs/actual_content.md`, `docs/action_log.md`
- Status: Completed.

### Convert Content Plan To Actual Content

- Issue/task: Make the content document follow the Project Overview outline and remove planning-only prompts.
- Action taken: Rewrote `docs/actual_content.md` to include only actual website content for About Me, Academic History, Projects, Tech Stack, Resume, and Contact.
- Files changed: `docs/actual_content.md`, `docs/action_log.md`
- Status: Completed.

### Import Resume Content Into Content Plan

- Issue/task: Populate the portfolio content plan using the uploaded resume.
- Action taken: Extracted text from `source_data/Resume Jumpei Kato 2025-10-28.pdf` and filled draft content for About Me, Academic History, Projects, Tech Stack, Resume, and Contact.
- Files changed: `docs/content_plan.md`, `docs/action_log.md`
- Status: Completed; LinkedIn, GitHub, X/Twitter, and public phone display remain TBD decisions.

### Create Portfolio Content Plan

- Issue/task: Create a dedicated document for preparing content for the selected portfolio sections.
- Action taken: Added `docs/content_plan.md` with scaffold sections for About Me, Academic History, Projects, Tech Stack, Resume, and Contact.
- Files changed: `docs/content_plan.md`, `docs/action_log.md`
- Status: Completed.

### Add Recommended Web Page Sections

- Issue/task: Add the recommended first-version portfolio web page sections to the project overview.
- Action taken: Added Hero, About Me, Academic History, Projects, Tech Stack, Resume, and Contact as the recommended section list, then renumbered the UI Template section.
- Files changed: `docs/project_overview.md`, `docs/action_log.md`
- Status: Completed.

### Add UI Template Section To Project Overview

- Issue/task: Document the current UI template in the project overview.
- Action taken: Added a UI Template section covering template files, page sections, placeholder content to replace, and the recommended first edit direction.
- Files changed: `docs/project_overview.md`, `docs/action_log.md`
- Status: Completed.

### Align OpenTofu Inputs With Real Repo

- Issue/task: Verify the filled `terraform.tfvars` values and remove remaining placeholders before running OpenTofu.
- Action taken: Confirmed `cloudflare_zone_name = "jumpeikato.com"` and `pages_custom_domain = "blog.jumpeikato.com"` in `infra/opentofu/terraform.tfvars`, and updated the active GitHub import in `infra/opentofu/imports.tf` from `sample_repo` to `website_my_portfolio`.
- Files changed: `infra/opentofu/imports.tf`, `docs/action_log.md`
- Status: Ready for `tofu plan` for the subdomain setup once GitHub and Cloudflare credentials are exported.

## 2026-04-23

### Add English And Japanese Pages With Header Toggle

- Issue/task: Create separate English and Japanese pages and add a language toggle at the right end of the header.
- Action taken: Added `src/index-jp.html`, `src/projects-jp.html`, and `src/resume-jp.html`; updated the existing English pages to include a right-side `EN / JP` language toggle in the header; and added shared toggle styling in `src/style.css`.
- Files changed: `src/index.html`, `src/projects.html`, `src/resume.html`, `src/index-jp.html`, `src/projects-jp.html`, `src/resume-jp.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed.

### Move Hero Image Left And Content Right

- Issue/task: Adjust the homepage hero so the portrait sits on the left and the title, copy, and links sit on the right.
- Action taken: Updated `src/index.html` to use a split hero layout and revised `src/style.css` so the desktop layout is image-left/content-right while mobile still stacks cleanly.
- Files changed: `src/index.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed.

### Rework Homepage To Match Davis-Style Structure

- Issue/task: The homepage rewrite did not follow the saved Davis Ryan reference structure closely enough.
- Action taken: Rebuilt `src/index.html` around the Davis-style pattern with top navigation, centered intro text, single hero image, centered CTA row, and a horizontally scrolling featured-project section. Added `src/projects.html` and `src/resume.html` so the `Projects` and `Resume` navigation now point to real pages, and rewrote `src/style.css` to support the new layout.
- Files changed: `src/index.html`, `src/projects.html`, `src/resume.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed; project cards still reuse the current portrait image until dedicated project images are added.

### Add Headshot To Homepage Hero

- Issue/task: Use the newly added profile image on the homepage.
- Action taken: Wired `src/assets/images/self_image.jpg` into the hero panel in `src/index.html` and added image frame styling in `src/style.css`.
- Files changed: `src/index.html`, `src/style.css`, `docs/action_log.md`
- Status: Completed.

### Create Markdown Resume From Existing Content

- Issue/task: Convert the resume into a Markdown version for easier editing in the repo.
- Action taken: Added `docs/resume.md` in resume-style Markdown using the structured content already present in `docs/actual_content.md`, since no source resume file was currently available in the repo to convert directly.
- Files changed: `docs/resume.md`, `docs/action_log.md`
- Status: Completed; if the original PDF or DOCX is added later, this Markdown version can be aligned against it.

### Add Done Section To Workflow

- Issue/task: Update the workflow tracker so completed WIP items move into a dedicated `Done` section.
- Action taken: Added `Done` to `docs/workflow.md` and moved the completed homepage structure, section-order, asset-folder, visual-direction, and page-tree documentation items out of `WIP`.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed; `WIP` now keeps only the remaining content replacement task.

### Restructure Homepage Around New Content Order

- Issue/task: Proceed on the workflow WIP items by rewriting the homepage structure and setting up supporting docs/assets.
- Action taken: Rebuilt `src/index.html` and `src/style.css` into a stronger single-page homepage with a new hero, reordered sections, clearer featured projects, and a simplified navigation flow. Added `docs/page_tree.md` to map the page structure and added `src/assets/images/` plus `src/assets/resume/` placeholders for future site assets.
- Files changed: `src/index.html`, `src/style.css`, `docs/page_tree.md`, `src/assets/images/.gitkeep`, `src/assets/resume/README.md`, `docs/action_log.md`
- Status: Homepage restructure completed for the current single-page site; next useful step is replacing placeholder assets and deciding whether `/projects` and `/resume` should become real pages.

### Add Simple Workflow Tracker

- Issue/task: Create a very simple workflow document before restructuring the homepage.
- Action taken: Added `docs/workflow.md` with `WIP`, `Mid term to Do`, and `Long term to do` sections focused on the homepage rewrite.
- Files changed: `docs/workflow.md`, `docs/action_log.md`
- Status: Completed.

### Inspect Saved Davis Ryan HTML

- Issue/task: Check whether the repo contains a local HTML copy of `davisryan.tech` and inspect its contents.
- Action taken: Confirmed the saved page at `docs/Davis Ryan's Portfolio.html` and reviewed key sections including metadata, navigation, social links, and project cards.
- Files changed: `docs/action_log.md`
- Status: Inspection completed; no site files modified.

## 2026-04-19

### Add Portfolio Planning To Project Overview

- Issue/task: Add the requested step-by-step portfolio website planning content to project overview.
- Action taken: Created `docs/project_overview.md` and added sections for goal/audience, structure, content gathering, stack choice, and MVP build checklist.
- Files changed: `docs/project_overview.md`, `docs/action_log.md`
- Status: Completed.

### Clarify Broad Audience And General Goal

- Issue/task: Refine the goal/audience section for a broad, general-use portfolio.
- Action taken: Updated `docs/project_overview.md` to specify general goal and audience (recruiter, X followers, friends/coworkers, university professor) with a concrete one-sentence positioning.
- Files changed: `docs/project_overview.md`, `docs/action_log.md`
- Status: Completed.

### Create Original Portfolio Starter Template

- Issue/task: Build a real starter website template inspired by a minimal portfolio vibe, without copying source design/code.
- Action taken: Added a one-page template with sections (`Home`, `Projects`, `About`, `Contact`), responsive styling, and small JS for mobile nav and footer year.
- Files changed: `src/index.html`, `src/style.css`, `src/script.js`, `docs/action_log.md`
- Status: Completed and ready for content replacement.

## 2026-04-25

### Add Docker Compose Dev Runner

- Issue/task: Convert the development container setup to Docker Compose for local test runs.
- Action taken: Added `docker-compose.yml` that builds from the existing `Dockerfile`, mounts the repository at `/app`, keeps the container running for dev use, and exposes port `8000` for static-site testing.
- Files changed: `docker-compose.yml`, `docs/action_log.md`
- Status: Completed; `docker compose config` validates the Compose file.

## 2026-04-25

### Fix Docker Compose Test Runner

- Issue/task: Docker test runner needed fixes after inspection found a missing lockfile requirement, hidden virtualenv risk, no default site server, and Terraform state in the Docker context.
- Action taken: Updated the Dockerfile to copy only `pyproject.toml` and place uv's project environment under `/opt/venv`, changed Compose to serve `src/` on port `8000`, and excluded OpenTofu state/vars from `.dockerignore`.
- Files changed: `Dockerfile`, `docker-compose.yml`, `.dockerignore`, `docs/action_log.md`
- Status: Completed; `docker compose config` validates the Compose file.
## 2026-04-26

### Remove Homepage Hero Buttons

- Issue/task: Remove the Contact, Projects, and Resume buttons from the homepage hero.
- Action taken: Deleted the hero `.button-row button-row-left` block from `src/index.html`.
- Files changed: `src/index.html`, `docs/action_log.md`
- Status: Completed; targeted search confirms the removed button row and links are no longer in `src/index.html`.

### Remove Selected Work Eyebrow

- Issue/task: Remove the `Selected Work` eyebrow text from the homepage project section.
- Action taken: Deleted the single eyebrow paragraph above the `Featured Projects` heading.
- Files changed: `src/index.html`, `docs/action_log.md`
- Status: Completed; targeted search confirms the exact paragraph is no longer in `src/index.html`.

### Widen Homepage Main Container

- Issue/task: Reduce excess side whitespace on the homepage hero.
- Action taken: Changed `.home-main` from the shared `980px` cap to `1120px`, matching the header/footer width while keeping `.page-main` at `980px`.
- Files changed: `src/style.css`, `docs/action_log.md`
- Status: Completed; targeted CSS search confirms homepage and footer use `1120px`, page content remains `980px`.

### Inspect Homepage Width Limit

- Issue/task: Explain why the homepage hero width is limited and whether the side whitespace is expected.
- Action taken: Inspected `src/index.html` and `src/style.css`; found `.home-main` capped at `980px`, while header/footer use `1120px`.
- Files changed: `docs/action_log.md`
- Status: Inspection completed; no homepage layout code changed.

### Remove Homepage Portfolio Eyebrow

- Issue/task: Remove the `Portfolio` eyebrow text from the homepage hero.
- Action taken: Deleted the single eyebrow paragraph before the homepage heading.
- Files changed: `src/index.html`, `docs/action_log.md`
- Status: Completed; targeted search confirms the exact paragraph is no longer in `src/index.html`.

### Remove Featured Project Detail Links

- Issue/task: Keep featured project summaries on the homepage without linking to unfinished detail sections.
- Action taken: Removed the four `Learn More` links from the homepage featured project cards.
- Files changed: `src/index.html`, `docs/action_log.md`
- Status: Completed; targeted search confirms no `Learn More` or `projects.html#` links remain in `src/index.html`.
