# Toggle

File: `Toggle.jsx` / `Toggle.css` · Depends on: —
Import: `import Toggle from './components/Toggle'`

| Prop | Options | Default |
|------|---------|---------|
| checked | boolean — on/off | `false` |
| disabled | boolean | `false` |
| strikethrough | boolean | `false` |
| showOnOff | boolean — shows "On"/"Off" text beside track | `false` |
| label | string — optional label shown after On/Off | — |
| onChange | function | — |

```jsx
<Toggle checked={enabled} onChange={() => setEnabled(v => !v)} showOnOff />
<Toggle checked={emailAlerts} onChange={toggleEmailAlerts} label="Email alerts" />
```

Colors: default track `rgba(201,215,226,0.6)`. Hover (off): solid `#C9D7E2`, thumb nudges right by 4px. Selected: `#17BB8D` track, thumb at end. Selected hover: `#00A879`, thumb slightly inset. Disabled: `opacity: 0.5`.

Copy the exact code above — do not recreate it.
