# PageSources

File: `PageSources.jsx` / `PageSources.css` · Depends on: `SideMenu.jsx/.css` (→ `public/img/bigin-icon.png`), `Checkbox.jsx/.css`
Import: `import PageSources from './components/PageSources'`

Full "Contacts" list page (no props): top bar (search + app icons), page header (title, view toggle, primary action), tabs row, filter/sort toolbar, data table (checkbox column, sortable header, avatar + status-circle rows, hover state), footer with record counts.

```jsx
<PageSources />
```

Reference pattern for any other list/table page (Deals, Companies, etc.) — swap `COLUMNS`/`ROWS` at the top of the file and adjust `grid-template-columns` in `PageSources.css` to match.

Copy the exact code above — do not recreate it.
