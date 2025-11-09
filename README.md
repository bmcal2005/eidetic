# Tai — Landing page (static)

This is a small static landing page that reproduces the layout shown in the attachment: centered hero, email waitlist form, social links, and a floating "thoughts?" button.

Files added
- `index.html` — main page
- `styles.css` — styles
- `script.js` — small client-side email validation and UI feedback

How to use

1. Open the project folder in your file explorer.
2. Double-click `index.html` to open it in your browser, or from PowerShell run:

```powershell
Start-Process index.html
```

Notes
- The form is client-only and does not send email anywhere. Replace the submit handler in `script.js` with an API call (or a service like Mailchimp/Formspree) to collect emails.
- Fonts are loaded from Google Fonts. If you need offline fonts, download and reference them locally.

Suggestions / next steps
- Hook the form to an email provider or server endpoint.
- Add minor animations or accessibility improvements (focus states, ARIA live regions for errors in multiple languages).
