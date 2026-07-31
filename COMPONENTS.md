# Design System Components

## Button
Import: `import Button from './components/Button'`

Props:
- variant: 'primary' | 'failure'
- size: 'large' | 'medium' | 'small'
- state: 'default' | 'hover' | 'active' | 'disabled'
- onClick: function
- children: button label text

Example:
```jsx
<Button variant="primary" size="large" state="default" onClick={handleClick}>Submit</Button>
```

---

## InputField
Import: `import InputField from './components/InputField'`

Props:
- label: field label text
- placeholder: placeholder text
- error: true | false
- errorMessage: error text shown below field
- onChange: function(value)

Example:
```jsx
<InputField label="Email" placeholder="Enter your email" error={false} errorMessage="Email cannot be empty" onChange={(val) => setEmail(val)} />
```