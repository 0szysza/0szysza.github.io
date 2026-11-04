# Hatchlist

A browser-local BGSI pet collection at https://0szysza.github.io/hatchlist/.

- List shows pets still to collect. Images are optional.
- Checking a pet moves it to /hatchlist/archive/ and records the current date and time. Unchecking it returns it to List; the next collection replaces the old time.
- Archive shows the time to the second in the browser's local timezone, newest first. Older collected records without a timestamp display Time not recorded.
- Pets can only be deleted from Archive. Moving and deleting pets can be undone for ten seconds.
- Custom tags are stored in a permanent library, including unused tags. Names have 1–15 characters and one six-digit HEX colour. The editor offers ten colour presets.
- Manage tags deletes custom tags from the library and all pets, with Undo. Built-in presets remain available.
- Tags appear in this order: Shiny, Mythic, XL, Super, Secret, Celestial, Infinity, VOID, Legendary, then custom tags. Multicolour presets use a ten-second gradient wave and solid colour dots. Reduced-motion preferences stop animations.
- List and Archive navigation lives in the top bar. Search and a coloured tag menu filter the current view; tag counts are scoped to that view and tags without matching pets are disabled. Empty results do not reserve a grid row. Backup imports and exports include the list, archive, timestamps and custom tag library.
- Version-three data uses the existing hatchlist.collection.v1 local-storage key. Version-one and version-two collections and backups migrate without losing pets or inventing collection times. Tabs stay in sync.
- No account or server is required; data remains separate for each browser. Imports add missing pets and combine custom tag libraries while preserving current records.

All icons are from Lucide or the existing tool UI. See LICENSE-icons.txt.

Run node --test hatchlist/model.test.mjs from the repository root. Serve the repository with a static web server for browser testing.
