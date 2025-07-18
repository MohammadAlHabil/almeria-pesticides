# Alternative: Using EmailJS (No Server Email Setup Required)

If you prefer not to set up email server credentials, you can use EmailJS as an alternative. Here's how:

## 1. Install EmailJS

```bash
npm install @emailjs/browser
```

## 2. EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get your service ID, template ID, and public key

## 3. Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 4. Alternative ContactForm Component

Replace the fetch call in `ContactForm.tsx` with:

```javascript
import emailjs from '@emailjs/browser';

// In handleSubmit function, replace the fetch call with:
try {
  const result = await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Almeria Pesticides",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );

  if (result.status === 200) {
    setSubmitStatus("success");
    setSubmitMessage("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  }
} catch (error) {
  setSubmitStatus("error");
  setSubmitMessage("Failed to send message. Please try again.");
}
```

## 5. EmailJS Template

Create a template in EmailJS with these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name

## Pros and Cons

### EmailJS Pros:

- No server email configuration needed
- Free tier available
- Easy setup
- Client-side only

### EmailJS Cons:

- Exposes API keys to client (use restrictions recommended)
- Rate limiting on free tier
- Dependency on third-party service

### Nodemailer Pros:

- Complete server control
- No API key exposure
- No rate limits (depends on email provider)
- More professional

### Nodemailer Cons:

- Requires email server setup
- More complex configuration
- Potential deliverability issues

## Recommendation

For production applications, **Nodemailer** is recommended for better security and control. EmailJS is good for prototyping or simple use cases.
