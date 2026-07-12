# Color Picker

[Website](https://stuartstew.github.io/color-picker/)

## Development

### Prerequisites

- Node 24+
- pnpm 11+

### Setup

```bash
pnpm install
```

### Commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `pnpm dev`        | Start development server           |
| `pnpm build`      | Build for production               |
| `pnpm preview`    | Preview production build           |
| `pnpm check`      | Run Biome formatter and linter     |
| `pnpm test`       | Run tests with Vitest              |
| `pnpm typecheck`  | Run TypeScript type checking       |

### Tech Stack

- **Framework:** React + Vite
- **UI Library:** Mantine
- **Language:** TypeScript
- **Formatter/Linter:** Biome
- **Testing:** Vitest + Testing Library

## Contributing

1. Fork the repository and create a feature branch from `main`.
2. Make your changes, then run the checks below before opening a PR.

```bash
pnpm check
pnpm typecheck
pnpm test
```

3. Open a pull request to `main`. CI will automatically run format/lint checks, type checking, and tests.
