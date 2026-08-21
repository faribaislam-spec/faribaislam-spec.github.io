# AI Tool Usage

This portfolio was built with help from **Claude** (Anthropic). Below is the prompt history from the conversation used to plan, write, and build this site.

🔗 **Full conversation:** https://claude.ai/share/637c905c-a9bd-4a6d-a0b7-b881e59fc4ed

## Tools Used

- **Claude** (Anthropic, claude.ai) — used for planning the site structure, drafting and revising README content, writing project descriptions, generating the HTML/CSS/JS code for the site, troubleshooting Git/GitHub commands, and compiling this usage log.

## Prompt History

1. Shared the assignment brief and asked for step-by-step instructions on how to complete and submit it.
2. Asked whether a co-authored report could be included in the portfolio.
3. Specified the desired site style: "visually expressive, formal but still customized and unique, and extendable over the years."
4. Asked what the GitHub repository README should contain.
5. Asked what the GitHub repository should be named.
6. Asked what the repository description should be.
7. Requested the full README content.
8. Provided GitHub profile screenshot to confirm username (`faribaislam-spec`) for naming the repo correctly.
9. Asked for the README again with the confirmed username.
10. Asked for the repository description again.
11. Requested the full README text.
12. Asked whether previous README sections (Academic Achievements, License, etc.) were actually needed, and got a breakdown of required vs. optional sections per the assignment.
13. Provided details on an early project, "Pika Run" (a running game with mini-games and coin collection), to be added to the README.
14. Provided a GitHub repository screenshot for a project, "FSM Cache Simulation," built with Raylib and C, plus mentioned a "DLD Stopwatch Timer" project made in Proteus.
15. Asked whether the FSM Cache Simulation and DLD Stopwatch Timer projects should be added to the README.
16. Clarified that RunGirlRun was a group project and Mayer Doa was analysis-only with no implementation, prompting a reorganization of the project categories.
17. Clarified that Pika Run was also a group project.
18. Requested only the "Projects" section of the README be regenerated with the updated structure.
19. Provided a fully rewritten version of the README content (About Me, Contact, Projects, etc.) and asked for it to be checked.
20. Asked for the projects to be categorized as Team, Individual, etc.
21. Provided the final personal content for the README (About Me bio, contact details, finalized project list) and asked for the full file.
22. Asked for the full README again without changing any of the content provided.
23. Asked what to do next.
24. Answered follow-up questions on site build approach (plain HTML/CSS/JS vs. Jekyll), visual mood (soft gradients, illustrative accents), and page structure (left the page-count decision to Claude).
25. Requested a recommendation on build approach when unsure, prompting Claude to choose plain HTML/CSS/JS with a multi-page structure (Home + Projects) and build the initial site (HTML, CSS, JS, README, AI-USAGE template).
26. Shared several color-palette and design-inspiration screenshots (plum purple/mauve swatches, sky blue, meadow green, and example portfolio site layouts) and asked for them to be used as the site's theme, prompting a redesign of the color system (category-based accent colors) and hero layout (sparkle/blob accents, editorial-style type).
27. Asked where to place the generated files in the repository, and asked for the AI usage log to be compiled directly from the conversation instead of manually copying prompts.
28. Asked what "cloned repo" meant.
29. Asked how to actually clone the repository and add files to it, and was walked through the terminal steps.
30. Pasted a PowerShell error (wrong directory for `cd Desktop`) and was helped through navigating to the correct folder and cloning there instead.
31. Pasted successful `git clone` output and was guided to move into the folder and add site files.
32. Confirmed understanding of the "copy files in, then run commands" process.
33. Pasted `git add .` output showing line-ending warnings, and was reassured these were harmless.
34. Pasted a successful `git commit` output; Claude flagged that CSS/JS files were committed at the top level instead of inside `css/`/`js/` subfolders and gave steps to fix the folder structure.
35. Confirmed intent to fix the folder structure.
36. Pasted terminal output showing the folder structure was corrected and successfully pushed to GitHub.
37. Shared a screenshot of the GitHub Pages settings page confirming the site was live.
38. Shared screenshots of the live site and flagged two content errors: an incorrect "Raylib" tag on FSM Cache Simulation and an incorrect "EEE 4483" tag on DLD Stopwatch Timer, and asked about adding real project links to the cards.
39. Asked how to create a `.gitignore` file, and was given a JavaFX/Eclipse template plus PowerShell commands for creating dotfiles on Windows.
40. Mentioned an additional project — a terminal-based OOP social media platform ("basically Facebook in terminal") built with a team, to be added to the portfolio.
41. Provided the project's name (LocalO), confirmed it used all core OOP concepts, and specified a personal role (posts, comments, and likes system).
42. Asked where to open the Git terminal for a JavaFX project folder, based on a screenshot of the folder contents.
43. Pasted terminal output after initializing and committing a project, then asked how to cancel/undo it, believing it was the wrong project.
44. Clarified the project was correct after all (Chat App) and continued the push process.
45. Pasted a "Repository not found" push error and was walked through creating the GitHub repository first before pushing.
46. Pasted a successful push for the Chat App project; Claude added the corresponding GitHub link to the portfolio's project data.
47. Asked for repository names for the Movie Scout and Stories App projects.
48. Asked for the commands to push the Movie Scout project, and was given the full `.gitignore` → `git init` → commit → GitHub repo creation → push sequence.
49. Pasted successful terminal output for the Movie Scout push, including a `bin/` folder that was committed despite the `.gitignore`; Claude flagged this and offered an optional cleanup.
50. Pasted terminal output for removing the `bin/` folder from tracking and pushing the cleanup commit.
51. Asked to proceed with the same process for the Stories App.
52. Pasted successful terminal output for the Stories App push.
53. Pasted a batch of GitHub repository links (LocalO, FSM Cache Simulation, Stories App, Movie Scout, RunGirlRun) with project names, to be wired into the portfolio's project cards.
54. Asked about including a co-authored research paper that is still under review.
55. Confirmed wanting the research paper added to the website itself (not just the README).
56. Provided the paper's title and full author list via screenshot, plus a screenshot showing the target citation format, prompting Claude to build a dedicated Research section on the site (data file, styled cards, "Under review" status badge, nav link).
57. Requested the updated AI-USAGE.md file, including a link to this conversation.
58. Changed the hero headline and accent styling to feel less templated/AI-generated and more personal.
59. Asked for the git commands to push the latest batch of updated files, then worked through a file-renaming issue (Windows appended "(1)"/"(2)" suffixes instead of overwriting) before successfully committing and pushing.
60. Pasted an older, incomplete version of this file and asked whether it was correct and to add the conversation link — prompted this update to the full, current version.
61. Asked for this content in copy-pasteable plain text instead of a downloadable file.

## Notes

- All final wording in the About Me section and project descriptions was written and approved by Fariba Islam; Claude assisted with structuring, formatting, and code generation.
- Design decisions (palette, typography, layout, category-color system) were proposed by Claude based on stated preferences and reference images, then reviewed and approved before implementation.
- Claude also assisted with Git/GitHub troubleshooting (folder structure fixes, `.gitignore` setup, resolving push errors) while pushing individual project repositories.
- This log reflects the conversation used to build the site as of the date the site was last updated. If further AI-assisted changes are made later, add new entries below rather than editing the ones above.
