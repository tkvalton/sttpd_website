# Straight To The Point Darts Website

A modern, responsive website for Straight To The Point Darts, built with Svelte and TypeScript. This website showcases darts coaching services, custom darts products, and provides information about the business.

## Features

- **Responsive design** that works on mobile, tablet, and desktop
- **Multi-page layout** with smooth transitions between pages
- **Interactive components** including:
  - Image galleries
  - Testimonial carousels
  - Service panels
  - YouTube integration
- **Performance optimized** with Svelte's compile-time framework

## Technologies Used

- **Svelte 5** - Component framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tooling and development server
- **CSS** - Custom styling with responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/straight-to-the-point-darts.git
   cd straight-to-the-point-darts
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
straight-to-the-point-darts/
├── public/               # Static assets (images, fonts, etc.)
│   ├── assets/           # Images and other media
│   │   ├── fonts/        # Custom fonts
│   │   ├── images/       # Image assets
│   │   ├── logos/        # Logo files
│   │   └── socials/      # Social media icons
│   └── vite.svg          # Vite logo
├── src/                  # Source code
│   ├── components/       # Reusable components
│   │   ├── about_us/     # About page components
│   │   ├── blog/         # Blog page components
│   │   ├── darts_coaching/ # Coaching page components
│   │   ├── general/      # General components used across pages
│   │   ├── home/         # Home page components
│   │   └── my_darts/     # My Darts page components
│   ├── pages/            # Page components
│   │   ├── AboutUs.svelte
│   │   ├── Blog.svelte
│   │   ├── Contact.svelte
│   │   ├── DartsCoaching.svelte
│   │   ├── Home.svelte
│   │   └── MyDarts.svelte
│   ├── App.svelte        # Main application component
│   ├── app.css           # Global styles
│   ├── main.ts           # Entry point
│   └── vite-env.d.ts     # Vite environment types
├── .gitignore            # Git ignore file
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
├── svelte.config.js      # Svelte configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # TypeScript app configuration
├── tsconfig.node.json    # TypeScript node configuration
└── vite.config.ts        # Vite configuration
```

## Content Management

### Adding New Content

To update content on the website:

1. **Blog Posts**: Add new blog posts in `src/pages/Blog.svelte` by adding entries to the `blogPosts` array.

2. **Testimonials**: Add new testimonials in `src/components/general/Testimonials.svelte` by adding entries to the `testimonials` array.

3. **Services**: Update coaching services in `src/pages/DartsCoaching.svelte`.

4. **Images**: Add new images to the `public/assets/images/` directory and reference them in components.

### Updating Information

- **Contact Information**: Update in `src/pages/Contact.svelte`
- **About Information**: Update in `src/pages/AboutUs.svelte`
- **Product Details**: Update in `src/pages/MyDarts.svelte`

## Deployment

The site can be deployed to various hosting platforms:

### GoDaddy Hosting (Recommended)

1. Build the project: `npm run build`
2. The built files will be in the `dist` directory
3. Upload the contents of the `dist` directory to your GoDaddy hosting using:
   - FTP client (like FileZilla)
   - GoDaddy's File Manager in cPanel
4. Make sure to upload the files to the correct directory:
   - For the main domain: upload to the `public_html` directory
   - For a subdomain: upload to the subdomain's directory

**Note:** Ensure all files, including `.html`, `.css`, `.js`, and asset files are transferred correctly.

### Other Hosting Options

#### Netlify

1. Create a new site in Netlify
2. Connect to your GitHub repository
3. Set build command to `npm run build`
4. Set publish directory to `dist`

#### Vercel

1. Import your GitHub repository
2. Vercel will automatically detect Svelte and configure the build settings
3. Deploy

#### GitHub Pages

1. Build the project: `npm run build`
2. Configure `vite.config.ts` with your base path:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // other config
   })
   ```
3. Deploy using GitHub Actions or manually

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Acknowledgements

- [Svelte](https://svelte.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)