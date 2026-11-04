# Hatchlist

A browser-local BGSI pet collection at https://0szysza.github.io/hatchlist/.

- Checklist shows wanted and collected pets until they are explicitly archived. Images are optional.
- Marking a pet as collected records the current date and time and leaves it in Checklist. A separate archive button appears beside the trash button for collected pets. Unmarking clears the collection time; collecting again records the newer time.
- Archive shows the time to the second in the browser's local timezone, newest first. Restoring a pet to Checklist keeps it collected and preserves its collection time. Older records without a timestamp display Time not recorded. The Archive navigation tab is hidden while the archive is empty.
- The red trash button deletes pets directly from Checklist or Archive. Deleting from Checklist does not move pets to Archive. Moving and deleting pets can be undone for ten seconds.
- Custom tags are stored in a permanent library, including unused tags. Names have 1–15 characters and one six-digit HEX colour. The editor offers ten colour presets.
- Manage tags deletes custom tags from the library and all pets, with Undo. Built-in presets remain available.
- Tags appear in this order: Shiny, Mythic, XL, Super, Secret, Celestial, Infinity, VOID, Legendary, Limited, Perm, Bounty, then custom tags. Multicolour presets use a ten-second gradient wave and solid colour dots. Reduced-motion preferences stop animations.
- Checklist and Archive navigation lives in the top bar. Search and a coloured tag menu filter the current view; tag counts are scoped to that view and tags without matching pets are disabled. Empty results do not reserve a grid row. Backup imports and exports include the list, archive, timestamps and custom tag library.
- Version-four data separates collected and archived flags and uses the existing hatchlist.collection.v1 local-storage key. Version-one through version-three collections and backups preserve their existing archive placement and collection times when migrated. Tabs stay in sync.
- No account or server is required; data remains separate for each browser. Imports add missing pets and combine custom tag libraries while preserving current records.

All icons are from Lucide or the existing tool UI. See LICENSE-icons.txt.

Run node --test hatchlist/model.test.mjs from the repository root. Serve the repository with a static web server for browser testing.


The pet editor uses a multi-select tag dropdown. Selected tags appear in its button. Limited uses #32FF00; Perm uses #FF8D1C; Bounty shares Legendary's rainbow wave and animated dot. Custom tag creation and management are available inside the dropdown.

