# Shadowhawk Equine: website

A landing page for Shadowhawk Equine, Rotorua. Plain HTML, CSS and JavaScript with no build step.

## Open it

1. Unzip the folder somewhere (e.g. `Documents\Projects\shadowhawk-equine`).
2. In VS Code: **File › Open Folder…** and choose `shadowhawk-equine`.
3. Right-click `index.html` › **Open with Live Server** (install the Live Server extension if you don't have it), or just double-click `index.html`.

## Hand it to Claude Code

Open the Claude Code panel in VS Code with this folder open. `CLAUDE.md` is picked up automatically. Then paste:

> Read CLAUDE.md. Work through the tasks in order, starting with the contact form. After each task, show me the result in Live Server and tell me what changed before moving on.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page (no inline styles: every element uses classes from `css/styles.css`) |
| `thanks.html` | Shown after the enquiry form is sent |
| `404.html` | Shown by Netlify for any address that doesn't exist |
| `css/styles.css` | All styling: colour tokens at the top, then one section per part of the page |
| `js/main.js` | English / Te Reo Māori text (including the scrolling banner), the toggle, the phone menu |
| `images/` | Photos, logo, supporter logos |
| `netlify.toml`, `robots.txt` | Netlify settings and search-engine rules |
| `CLAUDE.md` | Task list and project notes for Claude Code (kept on your computer only, not in git) |
