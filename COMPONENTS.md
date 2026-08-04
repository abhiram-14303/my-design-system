# IMPORTANT — Read before building any page

- Font: ZohoPuvi — loaded automatically via @font-face from https://my-design-system-mcdamjnb.onslate.in/fonts/
- Copy src/index.css exactly as-is into the new project — do NOT change font paths
- Background: always white (#FFFFFF)
- Text color: always #212129
- Never add dark themes or custom color schemes
- Never recreate components — always copy the exact source files from this repo
- Never draw/generate your own icon either. If a prompt contains
  `ds:icon-<name>`, that token maps to a real file at a fixed URL —
  `public/icons/outline/<name>.svg` in this repo. Construct that URL and
  fetch/download it automatically, then use the exact `<svg>` markup you get
  back. This applies EVEN IF you are confident you already know what that
  icon looks like (e.g. "delete", "close", "pin") — your version will not
  pixel-match this design system's icon, so it is wrong by definition no
  matter how close it looks. See `ICONS.md` for the full instructions.

## ID REFERENCES (read this first)
Every component has a short id — e.g. `button`, `checkbox`, `dropdown`. A
prompt may contain a bare token like `ds:<id>` (copied from a "Copy ID"
button in the app, from `src/pages/ComponentLibrary.jsx`, "Bigin Design
Hub"). If you see one, open **`docs/<id>.md`** directly — do not open this
file's component sections (there are none anymore) and do not search
anything else. That single small file has everything: props, usage, colors.
Dropdown variants (e.g. `dropdown-views`, `dropdown-users`) all live inside
the same `docs/dropdown.md`, at the anchor matching that id — open the file
and jump to `<a id="<id>">`. Multiple tokens in one prompt (e.g. `ds:checkbox
ds:radio ds:toggle`) mean all of those ids apply — open each file. See the
index below for the full id list.

**Icons work differently — see `ICONS.md` at the repo root, not `docs/`.**
The "Copy ID" button on an icon card copies a short `ds:icon-<name>` token,
same style as component ids — but resolving it means something stricter:
`<name>` maps to a fixed, real file URL, so seeing that token means
construct and fetch that URL automatically, then use exactly what comes
back. It's a literal file download, not a doc lookup — that's what makes it
safe from being redrawn from memory. Full URL pattern in `ICONS.md`.

## FONT SETUP (required)
After creating the project, run these commands to download the fonts:
mkdir -p public/fonts
curl -o public/fonts/ZohoPuvi-Regular.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Regular.ttf"
curl -o public/fonts/ZohoPuvi-Medium.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Medium.ttf"
curl -o public/fonts/ZohoPuvi-Semibold.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Semibold.ttf"

Also copy the header logo used by SideMenu:
mkdir -p public/img
curl -o public/img/bigin-icon.png "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/img/bigin-icon.png"

## GLOBAL CSS RESET (required — read this or icons will render black)

`src/index.css` must contain the reset below. Do **not** put `color` on the
universal `*` selector — put it on `body` instead.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'ZohoPuvi', sans-serif;
  /* no color here */
}
body {
  background: white;
  color: #212129;
}
```

Reason: every icon in this library is an inline SVG using `stroke="currentColor"`
so hover/selected states can recolor it purely with CSS (e.g. SideMenu turns
icons green on hover). A `* { color: ... }` rule sets `color` directly on the
`<svg>` node itself and overwrites whatever the wrapper element tries to apply —
icons silently render black in every state, no matter what the component does.
Keeping `color` on `body` preserves normal text-color inheritance without this
side effect.

# Design System Components

All components use ZohoPuvi font (Regular 400, Medium 500, Semibold 600).
Base text color: #212129. Background: white. No Tailwind, no CSS-in-JS, no UI
library dependency — every component is a plain `.jsx` + matching `.css` file
with inline SVG icons. Copy the files listed under **Depends on** together with
the component you want; nothing else needs installing beyond `react` + `react-dom`.

Browse everything live: `npm install && npm run dev`, then open
`src/pages/ComponentLibrary.jsx` ("Bigin Design Hub") in the browser. It's a
single page with one left sidebar grouped into three sections — **Components**
(Button, Card, Input Field, Tabs, Dropdown, Header, Footer, Selection, Search),
**Icons** (Outline Icons, more sets to come), and **Screens** (Right Modal,
Side Menu, Page Sources, Quick Previews — full assembled pages rather than
individual reusable pieces). That file itself is a demo harness, not
something to import into your app.

Every page (and every Dropdown variant, and every icon card, individually)
has a **"Copy ID"** button next to its title. It always copies a short
`ds:<id>` token — paste it into your prompt as-is, never a long link. For
components, that token resolves to `docs/<id>.md` (see "ID REFERENCES"
above). For icon cards, resolving the token means downloading a real file
at a fixed URL rather than copying a snippet from a doc — see `ICONS.md` at
the repo root for the exact URL pattern and why that's stricter than a
lookup.

## Index — id → doc

| id | Component | Doc |
|---|---|---|
| `button` | Button | `docs/button.md` |
| `card` | Card | `docs/card.md` |
| `inputfield` | InputField | `docs/inputfield.md` |
| `checkbox` | Checkbox | `docs/checkbox.md` |
| `radio` | Radio | `docs/radio.md` |
| `toggle` | Toggle | `docs/toggle.md` |
| `tabs` | Tabs (PrimaryTabs) | `docs/tabs.md` |
| `dropdown` | Dropdown — overview + all 7 variants | `docs/dropdown.md` |
| `dropdown-simple` | Dropdown, variant="simple" | `docs/dropdown.md#dropdown-simple` |
| `dropdown-withicons` | Dropdown, variant="withIcons" | `docs/dropdown.md#dropdown-withicons` |
| `dropdown-withiconsandtitle` | Dropdown, variant="withIconsAndTitle" | `docs/dropdown.md#dropdown-withiconsandtitle` |
| `dropdown-withiconsandsearch` | Dropdown, variant="withIconsAndSearch" | `docs/dropdown.md#dropdown-withiconsandsearch` |
| `dropdown-withsearch` | Dropdown, variant="withSearch" | `docs/dropdown.md#dropdown-withsearch` |
| `dropdown-users` | Dropdown, variant="users" | `docs/dropdown.md#dropdown-users` |
| `dropdown-views` | Dropdown, variant="views" | `docs/dropdown.md#dropdown-views` |
| `selectfield` | SelectField | `docs/selectfield.md` |
| `search` | Search / SearchGlobal | `docs/search.md` |
| `pill` | Pill | `docs/pill.md` |
| `panelheader` | PanelHeader | `docs/panelheader.md` |
| `footer` | Footer | `docs/footer.md` |
| `sidemenu` | SideMenu | `docs/sidemenu.md` |
| `rightmodal` | RightModal | `docs/rightmodal.md` |
| `pagesources` | PageSources | `docs/pagesources.md` |
| `quickpreview` | QuickPreview | `docs/quickpreview.md` |

Icons: see `ICONS.md`, not this index — `ds:icon-<name>` is a file fetch, not a doc lookup.
