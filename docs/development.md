# Development

Use Node 24. Run `npm ci --ignore-scripts`, `npm run check`, then `npm run build`. Publish `_site/` only. Pull requests run checks/build; pushes to main and manual runs publish through GitHub Pages. Public README files intentionally keep their short format.

The hub remains buildless HTML/CSS at runtime. Hatchlist remains browser-local with no accounts/backend; existing storage keys, schema migrations, limits and backup format are retained. `hatchlist/model.mjs` owns validation, import merging, filtering and field-level edit merging. `app.js` owns UI and persistence.

Open forms keep their original record for a three-way merge. Independent field edits merge; overlapping changes require Load latest or Keep my edits. Collection/archive state from another tab is preserved. A final stored-value check refuses stale writes that race with a storage event. This mitigates normal multi-tab use; localStorage is not a transactional multi-device database.

Import adds missing pet IDs while keeping existing records. It is not a full collection replacement. Export JSON before clearing browser storage; data is local to this browser/origin. Tag counts are cached per data/view revision, and unchanged pet DOM is reused during search. The legacy OLD interface remains available without a rewrite.

Visual changes preserve the existing layout, palette and artwork, while reducing shadows/hover growth. Contact buttons copy the Discord username instead of linking to an invalid username-as-ID profile URL. Minecraftmap has a direct-map fallback link; the external map server itself is outside this repository.
