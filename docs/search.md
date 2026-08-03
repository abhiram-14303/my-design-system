# Search

File: `Search.jsx` / `Search.css` · Depends on: —
Import: `import Search, { SearchGlobal } from './components/Search'`

Default export `Search`: standard light search field, three visual variants. Named export `SearchGlobal`: dark/global top-bar search style.

| Prop (`Search`) | Options | Default |
|------|---------|---------|
| variant | `rounded`, `cornered`, `dard` (dark) | `rounded` |
| showClose | boolean — external X button | `false` |
| placeholder | string | `'Search'` |
| disabled | boolean | `false` |
| value | controlled value (optional) | — |
| forceState | `hover`, `focused`, `null` | `null` |
| onChange / onClear / onClose | function | — |

```jsx
<Search placeholder="Search" onChange={setQuery} />
<Search variant="dard" showClose onClose={closeSearch} />
<SearchGlobal placeholder="Search (cmd+k)" value={q} onChange={setQ} onClear={() => setQ('')} />
```

Copy the exact code above — do not recreate it.
