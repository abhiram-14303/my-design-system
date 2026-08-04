# Bigin Design Hub

React component library for the Bigin design system. All components use the ZohoPuvi font, plain CSS (no Tailwind/UI libraries), and inline SVG icons.

## Quick start

```bash
npm install && npm run dev
```

Open the browser to see **Bigin Design Hub** — a live component library with sidebar navigation grouped into Components, Icons, and Screens.

## Font setup (required in new projects)

```bash
mkdir -p public/fonts public/img
curl -o public/fonts/ZohoPuvi-Regular.ttf   "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Regular.ttf"
curl -o public/fonts/ZohoPuvi-Medium.ttf    "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Medium.ttf"
curl -o public/fonts/ZohoPuvi-Semibold.ttf  "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Semibold.ttf"
curl -o public/img/bigin-icon.png           "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/img/bigin-icon.png"
```

## Components

| Component | Files |
|-----------|-------|
| Button | `Button.jsx`, `Button.css` |
| Card | `Card.jsx`, `Card.css` |
| Checkbox | `Checkbox.jsx`, `Checkbox.css` |
| CheckboxField | `CheckboxField.jsx`, `CheckboxField.css` |
| Dropdown | `Dropdown.jsx`, `Dropdown.css` |
| Footer | `Footer.jsx`, `Footer.css` |
| InputField | `InputField.jsx`, `InputField.css` |
| PanelHeader | `PanelHeader.jsx`, `PanelHeader.css` |
| Pill | `Pill.jsx`, `Pill.css` |
| QuickPreview | `QuickPreview.jsx`, `QuickPreview.css` |
| Radio | `Radio.jsx`, `Radio.css` |
| RightModal | `RightModal.jsx`, `RightModal.css` |
| Search | `Search.jsx`, `Search.css` |
| SelectField | `SelectField.jsx`, `SelectField.css` |
| SideMenu | `SideMenu.jsx`, `SideMenu.css` |
| Tabs | `Tabs.jsx`, `Tabs.css` |
| Toggle | `Toggle.jsx`, `Toggle.css` |

## Docs

Each component has a doc file in `docs/<id>.md`. Use the **Copy ID** button in the app to get a `ds:<id>` token, then open `docs/<id>.md` for props, usage, and colors. See `COMPONENTS.md` for the full index and setup instructions.

Icons work differently — see `ICONS.md`.
