# IMPORTANT — Read before building any page

- Font: ZohoPuvi — loaded automatically via @font-face from https://my-design-system-mcdamjnb.onslate.in/fonts/
- Copy src/index.css exactly as-is into the new project — do NOT change font paths
- Background: always white (#FFFFFF)
- Text color: always #212129
- Never add dark themes or custom color schemes
- Never recreate components — always copy the exact source files from this repo

## FONT SETUP (required)
After creating the project, run these commands to download the fonts:
mkdir -p public/fonts
curl -o public/fonts/ZohoPuvi-Regular.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Regular.ttf"
curl -o public/fonts/ZohoPuvi-Medium.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Medium.ttf"
curl -o public/fonts/ZohoPuvi-Semibold.ttf "https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/fonts/ZohoPuvi-Semibold.ttf"

# Design System Components

All components use ZohoPuvi font (Regular 400, Medium 500, Semibold 600).
Base text color: #212129. Background: white.

---

## Button

**Import:** `import Button from './components/Button'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| variant | `primary`, `failure` | `primary` |
| size | `large`, `medium`, `small` | `large` |
| state | `default`, `hover`, `active`, `disabled` | `default` |
| children | button label text | — |
| onClick | function | — |

### Usage
```jsx
<Button variant="primary" size="large" state="default">Submit</Button>
<Button variant="failure" size="medium" state="default">Delete</Button>
<Button variant="primary" size="large" state="disabled">Submit</Button>
```

### Sizes
- large: height 40px, padding 0 22px
- medium: height 32px, padding 0 16px
- small: height 28px, padding 0 12px

### Colors
- primary default: #17BB8D
- primary hover/active: gradient to #009A6F
- failure default: #FF5050
- failure hover/active: gradient to #E03838
- all buttons: white text, border-radius 999px, font-weight 600

---

## InputField

**Import:** `import InputField from './components/InputField'`

### Props
| Prop | Options | Default |
|------|---------|---------|
| label | string | `'Label Name'` |
| placeholder | string | `'Enter'` |
| state | `default`, `secondary`, `hover`, `focus`, `filled-focused`, `filled-unfocused`, `readonly`, `disabled`, `error` | — |
| value | string | `''` |
| error | boolean | — |
| errorMessage | string | `'It cannot be empty'` |
| onChange | function | — |
| showDropdown | boolean | `false` |
| showLookup   | boolean | `false` |
| showClear    | boolean | `false` |
| showNew      | boolean | `false` |

### Usage
```jsx
// Interactive (manages its own hover/focus/fill states)
<InputField label="Email" placeholder="Enter your email" onChange={(val) => setEmail(val)} />

// With validation error
<InputField label="Email" placeholder="Enter your email" error={true} errorMessage="Email cannot be empty" />

// Static display of a specific state
<InputField label="Disabled" state="disabled" />

// With dropdown and lookup icon
<InputField label="Company" placeholder="Select company" showDropdown={true} showLookup={true} />

// With all add-ons
<InputField label="Contact" showDropdown={true} showLookup={true} showClear={true} showNew={true} />
```

### Specs
- Width: 400px max
- Height: 40px
- Border radius: 8px
- Padding: 0 12px
- Gap between label and input: 20px
- Error message: right-aligned, #FF5050, 12px
- Border default: #BBCBD7
- Border focus/hover: #16B387
- Error border: #FF5050, background #FFF3F3