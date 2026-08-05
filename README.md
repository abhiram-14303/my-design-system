# Bigin Design System

## FOR AI ASSISTANTS — READ THIS FIRST
When asked to use any component from this design system, follow these exact steps:
1. Fetch the doc file to get props and usage
2. Fetch the JSX + CSS files
3. Copy both files into the project's `src/components/`
4. Import and use — do NOT rewrite or recreate

Do NOT browse the repo. Do NOT guess file paths. Use the exact URLs below.

---

## Base URL
```
https://raw.githubusercontent.com/abhiram-dd-14303/my-design-system/main
```

## Component → Fetch URLs

| Component name / alias | JSX | CSS | Doc |
|---|---|---|---|
| Button, AI button, AI Outline, AI Solid, Primary button, Failure button, Neutral button | `/src/components/Button.jsx` | `/src/components/Button.css` | `/docs/button.md` |
| Primary Tab, PrimaryTabs, tab bar, underline tab | `/src/components/Tabs.jsx` | `/src/components/Tabs.css` | `/docs/tabs.md` |
| Secondary Tab, Pills Tab, pill tab, pill shaped tab | `/src/components/Pill.jsx` | `/src/components/Pill.css` | `/docs/pill.md` |
| Input, InputField, text field, text input | `/src/components/InputField.jsx` | `/src/components/InputField.css` | `/docs/inputfield.md` |
| Dropdown, drop down, list panel | `/src/components/Dropdown.jsx` | `/src/components/Dropdown.css` | `/docs/dropdown.md` |
| SelectField, select, picklist | `/src/components/SelectField.jsx` | `/src/components/SelectField.css` | `/docs/selectfield.md` |
| Search, search bar, search field | `/src/components/Search.jsx` | `/src/components/Search.css` | `/docs/search.md` |
| Checkbox | `/src/components/Checkbox.jsx` | `/src/components/Checkbox.css` | `/docs/checkbox.md` |
| CheckboxField, checkbox field, checkbox input | `/src/components/CheckboxField.jsx` | `/src/components/CheckboxField.css` | `/docs/checkbox.md` |
| Radio, radio button | `/src/components/Radio.jsx` | `/src/components/Radio.css` | `/docs/radio.md` |
| Toggle, switch | `/src/components/Toggle.jsx` | `/src/components/Toggle.css` | `/docs/toggle.md` |
| Footer, bottom bar, action bar | `/src/components/Footer.jsx` | `/src/components/Footer.css` | `/docs/footer.md` |
| PanelHeader, panel header, modal header | `/src/components/PanelHeader.jsx` | `/src/components/PanelHeader.css` | `/docs/panelheader.md` |

**Full URL = Base URL + path.** Example:
```
https://raw.githubusercontent.com/abhiram-dd-14303/my-design-system/main/src/components/Button.jsx
```

## Font
ZohoPuvi font is required. Download once into the project:
```bash
mkdir -p public/fonts
curl -o public/fonts/ZohoPuvi-Regular.ttf "https://raw.githubusercontent.com/abhiram-dd-14303/my-design-system/main/public/fonts/ZohoPuvi-Regular.ttf"
curl -o public/fonts/ZohoPuvi-Medium.ttf "https://raw.githubusercontent.com/abhiram-dd-14303/my-design-system/main/public/fonts/ZohoPuvi-Medium.ttf"
curl -o public/fonts/ZohoPuvi-Semibold.ttf "https://raw.githubusercontent.com/abhiram-dd-14303/my-design-system/main/public/fonts/ZohoPuvi-Semibold.ttf"
```

Then add to your global CSS:
```css
@font-face { font-family: 'ZohoPuvi'; src: url('/fonts/ZohoPuvi-Regular.ttf'); font-weight: 400; }
@font-face { font-family: 'ZohoPuvi'; src: url('/fonts/ZohoPuvi-Medium.ttf'); font-weight: 500; }
@font-face { font-family: 'ZohoPuvi'; src: url('/fonts/ZohoPuvi-Semibold.ttf'); font-weight: 600; }
* { font-family: 'ZohoPuvi', sans-serif; }
```
