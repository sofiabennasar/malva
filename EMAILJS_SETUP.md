# EmailJS Setup Guide

The contact form is now integrated with EmailJS to send emails to sales@estudiomalva.com. Follow these steps to complete the setup:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email

## 2. Add Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add Service"
- Choose Gmail (or your preferred email provider)
- Follow the authentication steps
- Save your **Service ID** (e.g., `service_xxxxx`)

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Set up template with the following fields:
  - Name: Contact Form Template
  - Subject: New Contact Form Submission
  - Content example:
    ```
    Name: {{from_name}}
    Email: {{from_email}}
    Product: {{product}}
    
    Message:
    {{message}}
    ```
- Save your **Template ID** (e.g., `template_xxxxx`)

## 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key** (e.g., `YOUR_PUBLIC_KEY`)

## 5. Update Contact Form
Edit `/app/contact/page.tsx` and replace:
- `YOUR_PUBLIC_KEY` with your actual public key (line 7)
- `YOUR_SERVICE_ID` with your service ID (line 44)
- `YOUR_TEMPLATE_ID` with your template ID (line 44)

Example:
```javascript
emailjs.init('abc123xyz...');

await emailjs.send('service_abc123', 'template_xyz789', {
  // ... form data
});
```

## 6. Test
- Visit the contact page
- Fill out the form and submit
- Email should arrive at sales@estudiomalva.com

## Notes
- EmailJS free tier allows 200 emails/month
- Emails come from your configured email service
- Form data includes: name, email, product, and message
