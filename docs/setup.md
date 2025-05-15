# Setup Guide

This guide provides detailed instructions for setting up and running the Reverse Logistics POC application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 14.0.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation with `node --version`

- **npm**: Version 6.0.0 or higher (comes with Node.js)
  - Verify installation with `npm --version`

- **Git**: For version control
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation with `git --version`

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/reverse-logistics-POC.git
   cd reverse-logistics-POC
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all required dependencies listed in the `package.json` file.

3. **Verify Installation**

   Ensure that all dependencies were installed correctly by checking the `node_modules` directory.

## Configuration

The application uses several configuration files that you may need to modify:

### Vite Configuration

The `vite.config.ts` file contains settings for the Vite build tool:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

### Tailwind CSS Configuration

The `tailwind.config.js` file configures the Tailwind CSS framework:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}", // Include root TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript Configuration

The `tsconfig.json` file configures TypeScript compilation options:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Running the Application

### Development Mode

To run the application in development mode:

```bash
npm run dev
```

This will start the Vite development server. By default, the application will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

The development server features:
- Hot Module Replacement (HMR) for instant updates
- Error overlay for debugging
- Fast refresh for React components

### Production Build

To create a production-ready build:

```bash
npm run build
```

This will generate optimized assets in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Development Workflow

### Project Structure

The project follows this structure:

```
reverse-logistics-POC/
├── src/                  # Source files
│   ├── App.tsx          # Main application component with navigation
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── *.tsx                # Individual page components
├── package.json         # Project dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── index.html           # HTML entry point
└── README.md            # Project documentation
```

### Adding New Components

To add a new component to the application:

1. Create a new TSX file in the project root or src directory
2. Update `src/App.tsx` to:
   - Import the new component
   - Add a route for the component
   - Add a navigation link in the header

Example:

```typescript
// 1. Import the component
import NewComponent from '../new-component'

// 2. Add to navigation items
const navItems = [
  // ...existing items
  { path: '/new-component', name: 'New Component' },
]

// 3. Add route in the Routes component
<Route path="/new-component" element={<NewComponent />} />
```

### Styling Components

The application uses Tailwind CSS for styling. To style components:

1. Use Tailwind utility classes directly in your JSX
2. For custom styles, modify the `tailwind.config.js` file

Example:

```jsx
<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
  <h3 className="font-bold text-blue-800">Component Title</h3>
  <p className="text-sm mt-2">Component description text</p>
</div>
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**

   If port 5173 is already in use, Vite will automatically try another port. Look for the URL in the terminal output.

2. **Missing Dependencies**

   If you encounter errors about missing modules, ensure you've run `npm install` successfully.

3. **TypeScript Errors**

   For TypeScript errors, check that your component imports and types are correct.

### Getting Help

For additional help:

1. Check the [Vite documentation](https://vitejs.dev/guide/)
2. Check the [React documentation](https://reactjs.org/docs/getting-started.html)
3. Check the [React Router documentation](https://reactrouter.com/en/main)