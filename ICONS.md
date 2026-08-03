# Icon IDs

**If a prompt contains a `ds:icon-<name>` token: stop and read this before
doing anything else.** That token is a direct instruction to download one
specific existing icon file from this repo — it is not a description for
you to illustrate from memory. Do not generate, redraw, approximate, or
substitute a similar-looking icon from your own knowledge or from any other
icon set, even for common names like "delete", "close", "pin", "edit",
"clone", or "unpin" that you may feel confident you already know how to
draw. Your version will not match this design system's icon pixel-for-pixel,
so it is incorrect regardless of how close it looks.

### What `ds:icon-<name>` means — this is an automatic step, not optional
The token is intentionally short so a human can paste it without cluttering
their prompt with a long link — but it maps to one exact, real file. Every
icon is a standalone `.svg` file at `public/icons/outline/<name>.svg` (e.g.
`public/icons/outline/delete.svg`), always fetchable at this exact URL
pattern:

```
https://raw.githubusercontent.com/abhiram-14303/my-design-system/main/public/icons/outline/<name>.svg
```

As soon as you see `ds:icon-<name>`:
1. **Construct that URL by substituting `<name>`, and fetch it — immediately,
   automatically, without asking or second-guessing.** This is the download.
   The response body is the exact `<svg>...</svg>` markup for that icon —
   there is nothing left to interpret, approximate, or improvise.
2. **Inline that markup directly into your JSX** wherever the prompt asked
   for it (e.g. `<span className="...">{/* pasted <svg> here */}</span>`).
   Do **not** reference it as `<img src="...">` or a CSS `background-image`
   — that would load it as an opaque image and break the `currentColor`
   theming described below.

If you have no fetch/download capability at all, fall back to the copies
below instead — find the section anchored `icon-<name>` and copy that
`<svg>` markup verbatim, same as above.

All icons use `stroke="currentColor"` (never a hardcoded hex) so they inherit
whatever color the surrounding component/CSS applies — the same rule as
every other icon in this design system (see the `GLOBAL CSS RESET` section of
`COMPONENTS.md`). Do not hardcode a stroke color when you paste one of these
in; let the wrapping element's `color` control it, same as `.dd-item-icon` in
`Dropdown.css` (default `#606A81`, blue `#0783DA` on hover, etc.).

Source of truth, in order: the `.svg` files in `public/icons/outline/`, then
`src/components/icons/outline.jsx` (`OUTLINE_ICONS` array), then the copies
below — all three should always match exactly.

---

<a id="icon-delete"></a>
## Delete

```jsx
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M2.37931 3.38793L2.96551 11.3707C3.05172 12.4397 3.99138 13.25 5.12069 13.25H8.88793C10.0086 13.25 10.9483 12.4397 11.0345 11.3707L11.6207 3.38793M12.819 3.55036C12.4397 3.4875 12.0517 3.43362 11.6552 3.38872C11.0517 3.31689 10.431 3.25403 9.78448 3.20913C8.88793 3.15525 7.95689 3.11933 7 3.11933C6.0431 3.11933 5.11206 3.15525 4.21551 3.20913C3.56896 3.25403 2.94827 3.31689 2.34482 3.38872C1.94827 3.43362 1.56034 3.4875 1.18103 3.55036M4.23275 3.2069L4.67241 1.48276C4.78448 1.05172 5.18103 0.75 5.62931 0.75H8.37069C8.82758 0.75 9.22413 1.05172 9.3362 1.48276L9.76724 3.2069" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

<a id="icon-close"></a>
## Close

```jsx
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.75006 5.75015L10.2501 10.2498M10.2501 5.75015L5.75006 10.2498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.00002 15.2497C12.0039 15.2497 15.2497 12.0039 15.2497 8C15.2497 3.99609 12.0039 0.750275 8.00002 0.750275C3.99611 0.750275 0.750305 3.99609 0.750305 8C0.750305 12.0039 3.99611 15.2497 8.00002 15.2497Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

<a id="icon-clone"></a>
## Clone

```jsx
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.75 4.5V2.75C0.75 1.64 1.65 0.75 2.75 0.75H4.5M7.5 0.75H9.25C10.35 0.75 11.25 1.64 11.25 2.75V4.75M0.75 7.5V9.25C0.75 10.35 1.65 11.25 2.75 11.25H4.75M13.25 15.25H6.75C5.64543 15.25 4.75 14.3546 4.75 13.25V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

<a id="icon-unpin"></a>
## Unpin

```jsx
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M4.82892 11.1674L0.75 15.2474M6.61258 3.6125L8.76257 1.4625C9.71257 0.5125 11.2826 0.5125 12.2326 1.4625L14.5426 3.7725C15.4826 4.7125 15.4826 6.2825 14.5426 7.2325L12.3826 9.3825M10.0126 12.0125C9.77257 12.4925 9.65259 13.0325 9.71259 13.5325V14.6825C9.71259 15.2125 9.18257 15.4225 8.76257 15.1025L7.71259 14.0525L6.97256 13.3225L4.82257 11.1725L2.77258 9.1225L2.03256 8.3825L1.93259 8.2825L0.882568 7.2325C0.562568 6.9125 0.882582 6.2825 1.30258 6.2825H2.46259C3.00259 6.2825 3.51259 6.1825 3.96259 5.9625M3.75 0.750922L15.25 12.2509" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

<a id="icon-pin"></a>
## Pin

```jsx
<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M4.82999 11.1665L0.75 15.2465M1.93289 8.28033L0.881927 7.23082C0.566648 6.91598 0.881928 6.28623 1.30234 6.28623H2.45837C3.40426 6.28623 4.24503 5.97139 4.87558 5.34164L8.76413 1.45844C9.71002 0.513853 11.2865 0.513853 12.2323 1.45844L14.5444 3.76738C15.4903 4.71197 15.4903 6.28623 14.5444 7.23075L10.6559 11.114C10.0253 11.7436 9.60489 12.6882 9.70996 13.5278V14.6822C9.70996 15.207 9.18448 15.4169 8.76407 15.1021L7.71313 14.0526L6.97742 13.3179L2.77359 9.11986L2.0379 8.38519L1.93289 8.28033Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```

---

<a id="icon-edit"></a>
## Edit

```jsx
<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7.22911 2.69819C7.57851 4.7945 9.15065 6.5414 11.247 6.71605M12.129 1.7547C13.8743 3.34637 13.3507 4.58431 12.129 5.82231L5.67129 12.3659C5.4968 12.5427 4.97322 12.8964 4.62414 12.8964L2.18064 13.2502H1.65707C1.13349 13.2502 0.609914 12.5428 0.784404 11.8354L1.13349 9.35942C1.13349 9.00569 1.30798 8.65203 1.65707 8.2983L8.11479 1.75471C9.33643 0.693579 10.5582 0.163032 12.129 1.7547Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
```
