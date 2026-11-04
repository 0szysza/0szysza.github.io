# Hatchlist

A browser-local BGSI pet wishlist at https://0szysza.github.io/hatchlist/.

- Add pets with a name, a direct image URL, and nine built-in tags or custom role-style tags.
- Mark pets as collected with the checkbox below each card, search, and filter by status or tag. The checkbox saves immediately without changing the card border.
- Click a pet's image or name to edit it. Hover over a card to delete it; touch devices show the delete control continuously. A deletion can be undone for ten seconds.
- Data is saved under the `hatchlist.collection.v1` local-storage key. No account or server is required, and collections are separate for each browser.
- Export a JSON backup and import it on another device. Imports add missing pets and preserve existing records.
- Tabs on the same browser keep their collection in sync.
- Preset order: Shiny, Mythic, XL, Super, Secret, Celestial, Infinity, VOID, then Legendary. Multicolour presets keep their tinted fill with a 10-second gradient wave. Solid colour dots use their original colour cycle; reduced-motion settings keep both static. Selected tags expand to show a checkmark; unselected tags reserve no space for it.
- Custom tags have names of 1–15 characters and one six-digit HEX colour. Saved custom tags can be reused on other pets. All tags share one picker; a separate compact dialog creates custom tags without submitting the pet form. The compact editor offers ten preset colours and a HEX field.
- Six cards fit a desktop row; the add-pet tile follows the visible pets.
- Version-one collections and backups are read without losing existing pets. New backups use version two.

All icons are from [Lucide](https://lucide.dev/icons/) or the existing tool UI. The egg outline was selected by the site owner. See LICENSE-icons.txt.

Run the data checks with `node --test hatchlist/model.test.mjs` from the repository root. Serve the repository with a static web server for browser testing.
