# Portfolio Website - Haniya Shafiq

A modern, professional portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design with light/dark mode
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js optimization
- 🎭 Smooth animations using Framer Motion
- 🔍 SEO optimized with meta tags
- ♿ Accessible and user-friendly
- 🎯 Professional presentation for recruiters and clients
- 📧 Functional contact form powered by Web3Forms

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Inter, Roboto Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Contact Form Setup (Web3Forms)

The contact form is integrated with [Web3Forms](https://web3forms.com) for handling form submissions. To make it functional:

1. Get your access key:
   - Visit [https://web3forms.com](https://web3forms.com)
   - Enter your email address to receive a free access key
   - Copy the access key provided

2. Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Replace `your_access_key_here` with your actual Web3Forms access key

4. Restart your development server for the changes to take effect

**Note:** For production deployments (e.g., Vercel, Netlify), add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable in your platform's environment variable settings.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── FloatingSocialIcons.tsx
├── data/
│   ├── projects.json       # Project data
│   ├── experience.json     # Experience data
│   ├── skills.json         # Skills data
│   └── contact.json        # Contact information
└── public/
    └── images/
        └── projects/       # Project images
```

## Customization

### Update Personal Information

Edit the JSON files in the `data/` directory:
- `contact.json` - Update contact links
- `experience.json` - Modify experience entries
- `projects.json` - Add/update projects
- `skills.json` - Update skills and categories

### Update Project Images

Replace placeholder images in `public/images/projects/` with your actual project screenshots. The images should be:
- Named according to the project (e.g., `collaborative-study-room.jpg`)
- Optimized for web (recommended: WebP format, max 1200px width)
- Referenced correctly in `data/projects.json`

### Styling

Customize colors, fonts, and spacing in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and CSS variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Optimization

- Images are optimized using Next.js Image component
- Lazy loading for sections and images
- Code splitting automatically handled by Next.js
- CSS is optimized and minified in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Haniya Shafiq — All Rights Reserved

## Contact

- Email: haniyashafiq08@gmail.com
- LinkedIn: [linkedin.com/in/haniya-shafiq](https://www.linkedin.com/in/haniya-shafiq)
- GitHub: [github.com/haniyashafiq](https://github.com/haniyashafiq)

