# Virtue Creative Systems - Web Deployment Rules

> [!IMPORTANT]
> **CRITICAL RULE:** Do NOT use the Next.js code at `/Users/rodneycosta/Documents/DEVELOPMENT/REAPER_PLUGINS/VIRTUE_FX_MANAGER/website` for live production deployments. That directory is deprecated for the live website and lacks current styling (the pure blue theme, the help button, the updated store pages).
>
> The **ONLY** correct source of truth for the live production website (virtuecreativesystems.com) is this Vanilla HTML/CSS/JS directory:
> `/Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/WEBSITE`

## Deployment Command
Always run the deployment command from the parent folder `/Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE`:
```bash
npx wrangler pages deploy WEBSITE --project-name virtue-fx-manager --branch main
```

## Why this rule exists
Deploying the Next.js project overwrites the live website with an outdated design (e.g. replacing 'Help' with 'Docs', losing the store page, losing the pure blue theme). To prevent regression, all changes and updates must be made here.
