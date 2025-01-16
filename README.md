# Stylex Monorepo

This repository is a monorepo setup for a project using Stylex, a CSS-in-JS library. It's purpose is to demonstrate the usage of Stylex and Radix UI for building a token-based design system and component library and how a consuming application would use that design system and components. It addresses key concerns like variants, composition, tokens, conditional styling, and one offs.

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

1. Clone the repository.
2. Run `npm i` to install dependencies.

### Design System

1. Run `npm run storybook --workspace=@monorepo/design-system` to start the storybook development server.
2. Make changes.
3. Run `npm run build --workspace=@monorepo/design-system` to compile the design system for use in apps.

### Web App

1. Use `npm run dev --workspace=web` to start the web app development server.

## Contributing

Please follow the coding standards and guidelines provided in the repository. Ensure all code is properly linted and formatted before submitting a pull request.

## License

This project is licensed under the MIT License.
