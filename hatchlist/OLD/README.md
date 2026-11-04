# Hatchlist — OLD

First published version, restored from commit 7e27d2d78ece565bb97ae1ab74cd90bf30f892bc. Only route references and the local-storage namespace are adjusted for this copy.

A browser-local BGSI pet wishlist at https://0szysza.github.io/hatchlist/OLD/.

- Add pets with a name, a direct image URL, and optional Secret / Infinity tags.
- Mark pets as collected, search, and filter by status or tag.
- Click a pet's image or name to edit it. Hover over a card to delete it; touch devices show the delete control continuously. A deletion can be undone for ten seconds.
- Data is saved under the `hatchlist.OLD.collection.v1` local-storage key. No account or server is required, and collections are separate for each browser.
- Export a JSON backup and import it on another device. Imports add missing pets and preserve existing records.
- Tabs on the same browser keep their collection in sync.

All icons are from [Lucide](https://lucide.dev/icons/) or the existing tool UI. The egg outline was selected by the site owner. See LICENSE-icons.txt.

Run the data checks with `node --test hatchlist/OLD/model.test.mjs` from the repository root. Serve the repository with a static web server for browser testing.
