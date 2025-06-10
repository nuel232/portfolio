# Kelechi's Portfolio

A modern portfolio website showcasing Kelechi's skills and projects, built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design for all devices
- Dark and light theme support
- Interactive UI components
- Project showcase with Bento grid layout
- Skills visualization with animated progress bars
- Multi-step contact form
- Smooth animations and transitions

## Technologies Used

- Next.js for server-side rendering and routing
- React for UI components
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- next-themes for theme switching
- Radix UI for accessible components

## Getting Started

First, clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/components/ui` - Reusable UI components
- `/src/lib` - Utility functions and shared code

## Customization

To customize the portfolio for your own use:
1. Update the personal information and projects in the component files
2. Replace the logo and favicon
3. Adjust the color scheme in Tailwind config if desired
4. Add or remove sections as needed

## EmailJS Setup for Contact Form

To enable the contact form to send real emails:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `message`: The message content

4. Get your credentials and update the following files:

   - In `src/components/Contact.tsx`:
     ```javascript
     const EMAILJS_SERVICE_ID = "your_service_id"; 
     const EMAILJS_TEMPLATE_ID = "your_template_id"; 
     const EMAILJS_PUBLIC_KEY = "your_public_key"; 
     ```

   - In `src/app/layout.tsx`:
     ```javascript
     emailjs.init("your_public_key");
     ```

5. Test the contact form to ensure emails are being sent correctly.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

## Deploy

```bash
npm run start
```
