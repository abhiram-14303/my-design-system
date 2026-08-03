# Icon IDs

**If a prompt contains a `ds:icon-<name>` token: this is a direct fetch
instruction, not a description to illustrate.** Never generate, redraw, or
substitute a similar-looking icon from memory or another icon set, even for
common names like "delete", "close", "pin" — your version won't
pixel-match this design system's icon, so it's wrong regardless.

## Resolving `ds:icon-<name>`
Every icon is a standalone `.svg` file at `public/icons/outline/<name>.svg`,
always fetchable at:

```
https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/icons/outline/<name>.svg
```

1. Substitute `<name>`, fetch that URL immediately — no asking, no
   second-guessing. The response body is the exact `<svg>...</svg>` markup.
2. Inline that markup directly into your JSX. Never reference it via
   `<img src="...">` or a CSS `background-image` — that loads it as an
   opaque image and breaks the `currentColor` theming below.

All icons use `stroke="currentColor"` (never a hardcoded hex) so they
inherit whatever color the wrapping component/CSS applies (see `GLOBAL CSS
RESET` in `COMPONENTS.md`) — e.g. `.dd-item-icon` in `Dropdown.css` is
`#606A81` default, `#0783DA` on hover. Don't hardcode a stroke color when
you paste one in.

Current icon ids: `delete`, `close`, `clone`, `unpin`, `pin`, `edit`. Source
of truth: the `.svg` files in `public/icons/outline/` (canonical) — also
mirrored in `src/components/icons/outline.jsx` (`OUTLINE_ICONS` array) for
in-app rendering. If fetching isn't possible, read the file at that repo
path directly instead of redrawing it.
