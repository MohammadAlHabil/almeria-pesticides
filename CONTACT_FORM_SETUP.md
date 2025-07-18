# Contact Form Setup Guide

## Overview

The contact form is implemented with the following features:

- ✅ Client-side validation (no external libraries needed)
- ✅ Success/Error messaging
- ✅ Loading states
- ✅ Email sending via Nodemailer
- ✅ Responsive design matching the site theme
- ✅ Multi-language support (English/Arabic)

## Files Created/Modified

1. `/src/app/api/contact/route.ts` - API endpoint for handling form submissions
2. `/src/components/ContactForm.tsx` - React component with validation and state management
3. `/src/app/[locale]/contact/page.tsx` - Updated to use the new ContactForm component
4. `.env.example` - Environment variables template

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure your email settings:

```bash
cp .env.example .env.local
```

### 2. Gmail Setup (Recommended)

For Gmail, you need to:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - if the app password doesn't found go to this link "https://myaccount.google.com/apppasswords"
3. Add to `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 3. Alternative Email Services

#### Outlook/Hotmail

```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

Update `route.ts` service to "hotmail"

#### Yahoo

```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-password
```

Update `route.ts` service to "yahoo"

#### Custom SMTP

For company email servers, update the transporter in `route.ts`:

```javascript
const transporter = nodemailer.createTransport({
  host: "smtp.your-domain.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Features

### Form Validation

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters

### Error Handling

- Client-side validation with real-time feedback
- Server-side validation
- Network error handling
- User-friendly error messages

### Success States

- Form reset on successful submission
- Success message display
- Professional email template

### Email Template

The email includes:

- Contact details (name, email)
- Message content
- Timestamp
- Professional styling
- Company branding

## Testing

### 1. Local Testing

```bash
npm run dev
```

Navigate to `/contact` and test the form

### 2. Test Cases

- Submit empty form (should show validation errors)
- Submit invalid email (should show email validation error)
- Submit valid form (should show success message)
- Test network failures (should show error message)

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Rate Limiting**: Consider adding rate limiting to the API endpoint
3. **Spam Protection**: Consider adding CAPTCHA for production
4. **Input Sanitization**: Email content is escaped in HTML template

## Customization

### Styling

The form uses Tailwind CSS classes matching your site's design system:

- Emerald/Teal color scheme
- Rounded corners (xl)
- Gradient backgrounds
- Hover effects and transitions

### Email Template

Modify the HTML template in `route.ts` to match your branding

### Validation Rules

Update validation logic in `ContactForm.tsx` as needed

## Troubleshooting

### Common Issues

1. **"Auth failed"**: Check email credentials and app password
2. **"Network error"**: Check API endpoint and server status
3. **Form not submitting**: Check browser console for validation errors

### Debug Mode

Add console logs in `route.ts` to debug email sending:

```javascript
console.log("Attempting to send email to:", process.env.EMAIL_USER);
```

## Production Deployment

1. Set environment variables in your hosting platform
2. Ensure SMTP ports (587/465) are not blocked
3. Test email delivery
4. Monitor email sending logs
5. Consider setting up email delivery monitoring

## Dependencies Added

- `nodemailer`: Email sending functionality
- `@types/nodemailer`: TypeScript types

No heavy form libraries needed - keeping the bundle size minimal!
