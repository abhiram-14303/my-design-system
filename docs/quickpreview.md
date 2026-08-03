# QuickPreview

File: `QuickPreview.jsx` / `QuickPreview.css` · Depends on: —
Import: `import QuickPreview, { PREVIEWS, CONTACT, DEAL } from './components/QuickPreview'`

Data-driven 550px record-preview side panel — no hardcoded record type. `PREVIEWS` exports 10 ready-made examples: Contact (+ back-bar), Company (+ back-bar), Deal, Product, Task, Event, Call.

| Prop | Options | Default |
|------|---------|---------|
| data | config object — see shape below | — |

`data` shape:
```js
{
  header: {
    avatar: 'photo' | 'logo' | 'person' | null,  // null = text-only header (Deal/Task/Event/Call)
    initials, avatarColor,                          // used with avatar: 'photo'
    title, titleIcon, amount,
    role, company, owner,
    action: { label, kind: 'green' | 'split', icon: 'mail' },
    stage, detailRows: [{ label, value, caret }],   // Deal-style, optional
    backBar: boolean,
    tabs: ['Information', 'Notes'],                  // omit 'Notes' for single-tab records
  },
  sections: [
    { type: 'iconFields', label, fields: [{ icon, value }] },
    { type: 'labelValues', label, labelWidth, rows: [{ label, value, color, icon }] },
    { type: 'secondaryContacts', label, rows: [{ name, email, color }] },
    { type: 'tag', mode: 'pills' | 'link', tags: [{ t, c }] },
    { type: 'description', text, long },
    { type: 'otherInfo', rows: ['Field Label', ...], open },
  ],
  modified: 'Jun 23, 2025 04:50AM',
}
```

```jsx
import QuickPreview, { PREVIEWS } from './components/QuickPreview'
<QuickPreview data={PREVIEWS[0]} /> {/* Contact */}

<QuickPreview data={{
  header: { avatar: 'photo', initials: 'AB', avatarColor: '#6E8BE8', title: 'Alex Baker', role: 'Sales Rep', owner: 'Lara Ethan', action: { label: 'Send Mail', kind: 'green', icon: 'mail' } },
  sections: [
    { type: 'iconFields', label: 'Basic Info', fields: [{ icon: <MailIcon />, value: 'alex@b.com' }] },
    { type: 'tag', mode: 'pills', tags: [{ t: 'VIP', c: 'orange' }] },
    { type: 'description', text: '--' },
  ],
  modified: 'Jun 23, 2025 04:50AM',
}} />
```

Copy the exact code above — do not recreate it.
