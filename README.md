# Portfolio Frontend - Kamilath Rifka

A modern, responsive Angular-based portfolio website showcasing the skills, experience, projects, and qualifications of Kamilath Rifka, a Software Developer & Tester specializing in Java, Python, and web technologies.

## 🚀 Project Overview

This project is a single-page application (SPA) built with Angular 20, designed to serve as a professional portfolio. It features a clean, animated UI with sections for home, about, qualifications, projects, and contact. The site highlights technical expertise in software development, automation testing, and AI integration, with a focus on user experience and performance.

The application is fully responsive, optimized for mobile and desktop, and includes interactive elements like animated icons, skill showcases, and project links.

## ✨ Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox for seamless viewing across devices.
- **Single Page Application (SPA)**: Fast navigation using Angular Router with lazy-loaded components.
- **Animated UI**: Custom CSS animations (e.g., slide-in, fade-in, float, bounce) for engaging user interactions.
- **Personal Branding**: Custom logo (KR), inspirational quotes, and professional summaries.
- **Skills Showcase**: Visual representation of technical skills using DevIcons and FontAwesome icons.
- **Experience Timeline**: Detailed work experience with metrics and achievements.
- **Projects Gallery**: Highlighted projects with tech stacks, descriptions, and links to live demos and source code.
- **Qualifications Section**: Education, certifications, and achievements in a timeline format.
- **Contact Information**: Direct links to email and LinkedIn.
- **SEO-Friendly**: Structured HTML with semantic elements for better search engine visibility.
- **Performance Optimized**: Built with Angular's Ahead-of-Time (AOT) compilation and tree-shaking for minimal bundle size.

## 🛠️ Tech Stack

### Frontend Framework
- **Angular 20**: Core framework for building the SPA, utilizing components, services, and routing.
- **TypeScript 5.9**: Strongly typed language for robust development and better IDE support.
- **RxJS 7.8**: Reactive programming for handling asynchronous operations.

### Styling & UI
- **SCSS (Sass)**: Preprocessed CSS for modular, maintainable stylesheets.
- **FontAwesome 6**: Icon library for visual elements (e.g., social icons, skill badges).
- **DevIcons**: Technology-specific icons for skills and projects.

### Build & Development Tools
- **Angular CLI 20.3.6**: Command-line interface for scaffolding, building, and serving the application.
- **Webpack**: Bundler integrated with Angular CLI for asset optimization.
- **Karma & Jasmine**: Testing framework for unit tests.
- **Prettier**: Code formatter configured for consistent styling (printWidth: 100, singleQuote: true).

### Dependencies
- **@angular/common, @angular/core, @angular/forms, @angular/platform-browser, @angular/router**: Core Angular modules.
- **zone.js**: Execution context for Angular's change detection.
- **tslib**: Runtime library for TypeScript helpers.

### Development Dependencies
- **@angular/build, @angular/cli, @angular/compiler-cli**: Build and CLI tools.
- **@types/jasmine, jasmine-core, karma, karma-chrome-launcher, karma-coverage, karma-jasmine, karma-jasmine-html-reporter**: Testing suite.

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (recommended: LTS version).
- **npm**: Version 9.x or higher (comes with Node.js).
- **Angular CLI**: Install globally via `npm install -g @angular/cli`.
- **Git**: For version control and cloning the repository.

Verify installations:
```bash
node --version
npm --version
ng version
```

## 🏗️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This will install all dependencies listed in `package.json`.

3. **Verify Installation**:
   ```bash
   ng version
   ```
   Ensure Angular CLI is properly configured.

## 🚀 Usage

### Development Server

To start a local development server with hot reload:

```bash
ng serve
```

- The application will be available at `http://localhost:4200/`.
- Changes to source files will automatically trigger a reload.
- The server runs with live reloading enabled by default.

For a specific port or host:
```bash
ng serve --port 4201 --host 0.0.0.0
```

### Build for Production

To build the project for production:

```bash
ng build
```

- The build artifacts will be stored in the `dist/portfolio-frontend/` directory.
- The build process includes AOT compilation, tree-shaking, and minification for optimal performance.
- Use `--configuration production` for optimized builds (default).

For a development build:
```bash
ng build --configuration development
```

### Running Tests

#### Unit Tests
Execute unit tests with Karma:

```bash
ng test
```

- Runs tests in a headless Chrome browser.
- Generates coverage reports in `coverage/` directory.
- Tests are written in Jasmine and executed via Karma.

#### End-to-End Tests
For e2e testing (requires additional setup):

```bash
ng e2e
```

Note: Angular CLI does not include an e2e framework by default. You can add one like Cypress or Protractor.

### Linting & Formatting

- **Prettier**: Automatically formats code on save or via `npx prettier --write .`.
- **ESLint**: Integrated with Angular CLI for code quality checks (run `ng lint` if configured).

## 📁 Project Structure

```
portfolio-frontend/
├── .editorconfig                 # Editor configuration for consistent coding styles
├── .gitignore                    # Git ignore rules
├── angular.json                  # Angular CLI configuration
├── package.json                  # NPM dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # App-specific TypeScript config
├── tsconfig.spec.json            # Test-specific TypeScript config
├── public/                       # Static assets (favicon, etc.)
│   └── favicon.ico
├── src/                          # Source code
│   ├── index.html                # Main HTML template
│   ├── main.ts                   # Application bootstrap
│   ├── styles.css                # Global styles
│   ├── app/                      # Angular application
│   │   ├── app.config.ts         # App configuration (providers, etc.)
│   │   ├── app.css               # App-level styles
│   │   ├── app.html              # Root component template
│   │   ├── app.routes.ts         # Routing configuration
│   │   ├── app.spec.ts           # Root component tests
│   │   ├── app.ts                # Root component
│   │   ├── home/                 # Home component
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── about/                # About component
│   │   │   ├── about.component.html
│   │   │   ├── about.component.scss
│   │   │   ├── about.component.spec.ts
│   │   │   └── about.component.ts
│   │   ├── qualifications/       # Qualifications component
│   │   │   ├── qualifications.component.html
│   │   │   ├── qualifications.component.scss
│   │   │   ├── qualifications.component.spec.ts
│   │   │   └── qualifications.component.ts
│   │   ├── projects/             # Projects component
│   │   │   ├── projects.component.html
│   │   │   ├── projects.component.scss
│   │   │   ├── projects.component.spec.ts
│   │   │   └── projects.component.ts
│   │   └── contact/              # Contact component
│   │       ├── contact.component.html
│   │       ├── contact.component.scss
│   │       ├── contact.component.spec.ts
│   │       └── contact.component.ts
└── dist/                         # Build output (generated)
```

## 🔧 Scripts

Defined in `package.json`:

- `npm start` or `ng serve`: Start development server.
- `npm run build` or `ng build`: Build for production.
- `npm run watch` or `ng build --watch`: Build and watch for changes.
- `npm test` or `ng test`: Run unit tests.
- `ng generate component <name>`: Scaffold a new component.
- `ng generate --help`: List all available schematics.

## 🚀 Deployment

### Static Hosting
Since this is an Angular SPA, it can be deployed to static hosts like:

- **Vercel**: Connect GitHub repo and deploy automatically.
- **Netlify**: Drag-and-drop `dist/` folder or integrate with Git.
- **GitHub Pages**: Use `angular-cli-ghpages` for deployment.
- **Firebase Hosting**: Run `firebase deploy` after building.

Example for Vercel:
1. Build the project: `ng build --configuration production`.
2. Deploy `dist/portfolio-frontend/` to your hosting provider.

### Server-Side Rendering (SSR)
For better SEO and performance, consider adding Angular Universal:
```bash
ng add @nguniversal/express-engine
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

Please ensure:
- Code follows Angular style guide.
- Tests pass: `ng test`.
- Code is formatted with Prettier.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Kamilath Rifka  
Software Developer & Tester  

- **Email**: [kamilathrifka@gmail.com](mailto:kamilathrifka@gmail.com)
- **LinkedIn**: [linkedin.com/kamilath-rifka](https://linkedin.com/kamilath-rifka)
- **Portfolio**: [Live Site](https://your-live-site.com) (Replace with actual URL)

For issues or questions, open an issue on GitHub or reach out via email.

---

Built with ❤️ using Angular 20.
