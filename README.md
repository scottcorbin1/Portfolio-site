# Scott Corbin — Portfolio

A responsive static portfolio based on the supplied resume. All public files are in `public/`. No build step, dependencies, API keys, or environment variables are needed. The original resume is intentionally excluded because it contains a phone number. Project artwork is labeled conceptual. The AI project and three additional project cards link directly to verified public GitHub repositories. The sustainability project retains a profile link because no matching public repository was found.

## Preview locally

From this folder, run:

```powershell
python -m http.server 3000 --directory public
```

Open http://localhost:3000. Stop the server with Ctrl+C.

## Deploy to Vercel

1. Push this folder to a GitHub repository. Keep `.tools/` excluded using the included `.gitignore`.
2. In Vercel, choose **Add New → Project**, then import the repository.
3. Choose **Other** as the framework preset. Leave the build command empty and set the output directory to `public`. The included `vercel.json` also specifies these settings.
4. Click **Deploy**. No environment variables are required.

Alternatively, with Node.js and the Vercel CLI installed, run `vercel --prod` from this folder and follow the account prompts.

## Edit content

- `public/index.html`: text, links, project details, education, and experience.
- `public/styles.css`: layout, colors, and responsive styles.
- `public/script.js`: current copyright year.
- `public/favicon.svg`: initials icon.

The LinkedIn link normalizes the resume's `linkedin.com/Scott-Corbin` to `https://www.linkedin.com/in/Scott-Corbin`; verify it against your actual profile before sharing. The current job is identified as current according to the supplied resume; update it if needed. Google Fonts is optional: the site falls back to system sans-serif fonts if unavailable.

## Public GitHub projects

Project descriptions were reviewed against public repository READMEs and selected source files on October 31, 2026:

- [Image-AI](https://github.com/scottcorbin1/Image-AI): Python image classification with TensorFlow and a nine-image Pygame interface. The existing featured AI project links here.
- [Volunteer-Management-App](https://github.com/scottcorbin1/Volunteer-Management-App): React client, Express server, and MongoDB/Mongoose data models for volunteers, opportunities, and administrators.
- [Hospital-Database](https://github.com/scottcorbin1/Hospital-Database): Java, Oracle JDBC, SQL queries, and database/schema diagrams for a database course project.
- [ConcurrentSocketServer](https://github.com/scottcorbin1/ConcurrentSocketServer): Java TCP sockets, per-client server threads, concurrent client requests, and request timing.

These are static project descriptions; the portfolio does not call the GitHub API at runtime. Edit `public/index.html` to add repositories or update descriptions. Repository links provide source code, not hosted demos. The database-backed projects require their own database setup, as documented in their READMEs.
