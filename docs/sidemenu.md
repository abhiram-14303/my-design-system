# SideMenu

File: `SideMenu.jsx` / `SideMenu.css` · Depends on: `public/img/bigin-icon.png`
Import: `import SideMenu from './components/SideMenu'`

Self-contained Bigin navigation sidebar (219px wide, full height). No props — manages its own selected-item state. Two sections: MODULES (Pipelines, Contacts, Companies, Products, Activities, Messages, RouteIQ) and TOOLS (LeadGen, AI, Automation, Communication, Integrations & Toppings, Dashboards), plus header with logo + collapse icon.

```jsx
<div style={{ display: 'flex' }}>
  <SideMenu />
  <main style={{ flex: 1 }}>{/* page content */}</main>
</div>
```

States: default icon `#606A81` / label `#212129`; hover bg `#F6F9FB`, icon+label `#00A879`, label medium weight; selected bg `#E7F6F2`, icon+label `#00A879`, label medium weight.

Copy the exact code above — do not recreate it.
