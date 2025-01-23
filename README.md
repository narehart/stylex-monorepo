# Stylex Monorepo 🎨

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2+-blue)](https://reactjs.org/)

A modern, production-ready monorepo showcasing [Stylex](https://stylexjs.org/) (Meta's CSS-in-JS solution) integrated with [Radix UI](https://www.radix-ui.com/). Build scalable design systems with type-safe styling and accessible components.

## ✨ Features

- 🎯 Type-safe styling with Stylex
- 🧩 Composable Radix UI primitives
- 📦 Monorepo architecture with workspace optimizations
- 🔧 Full TypeScript support
- 📱 Mobile-first responsive design

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/stylex-demo.git

# Install dependencies
npm install

# Start development
npm run dev
```

## 🛠️ Technology Stack

- Stylex (CSS-in-JS)
- Radix UI (Headless Components)
- React 18
- TypeScript
- Webpack

## 📁 Project Structure

```
stylex-demo/
├── packages/
│   ├── design-system/        # Core UI components and tokens
├── apps/
│   ├── web-browser/          # Web application where code is exclusively executed by the browser
```

## 📝 Development Guide

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Getting Started

1. **Setup Your Environment**

   ```bash
   npm install    # Install dependencies
   npm run build  # Build all packages
   npm run dev    # Start development servers
   ```

2. **Development Workflow**
   - Make changes in `packages/design-system/src`
   - Make changes in `apps/web-browser/src`
   - View changes at http://localhost:3000/

### 🐛 Troubleshooting

Common issues and solutions:

1. **Missing Dependencies**

   ```bash
   npm install      # Re-install dependencies
   npm run clean    # Clear build artifacts
   ```

2. **Stylex Compilation Issues**
   - Verify Babel config
   - Check Webpack setup
   - Clear TypeScript cache

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your own learning and development!
