# Stylex Monorepo

This repository is a monorepo setup demonstrating how to use [Stylex](https://stylexjs.org/) (Meta's CSS-in-JS library) and [Radix UI](https://www.radix-ui.com/) for building a token-based design system. Its purpose is to showcase a practical implementation of a component library with examples of variants, composition, tokens, and conditional styling.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Technology Stack

- Stylex (CSS-in-JS)
- Radix UI (Headless Components)
- React 18
- TypeScript
- Webpack
- Storybook

## Structure

- `packages/`: Contains shared packages such as design systems or utility libraries.
- `apps/`: Contains individual applications (currently just web but mobile could be added as well).

## Scripts

- `build`: Builds all workspaces.
- `lint`: Lints all workspaces.
- `format`: Formats code using Prettier.
- `prepare`: Sets up Husky for Git hooks.

## Development

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build all packages:
   ```bash
   npm run build
   ```

### Development Workflow

1. Start the design system:

   ```bash
   npm run storybook --workspace=@monorepo/design-system
   ```

2. In a separate terminal, start the web app:

   ```bash
   npm run dev --workspace=web
   ```

3. Make changes to components in `packages/design-system/src`
4. Test changes in Storybook
5. Build design system before testing in web app:
   ```bash
   npm run build --workspace=@monorepo/design-system
   ```

### Troubleshooting

- If you encounter missing dependencies, run `npm install` at the root
- For Stylex compilation issues, ensure Babel and Webpack configs are properly set up
- Clear build artifacts with `npm run clean` in the affected workspace

## Contributing

Please follow the coding standards and guidelines provided in the repository. Ensure all code is properly linted and formatted before submitting a pull request.

## License

This project is licensed under the MIT License.
