# Color Picker

[Website](https://stuartstew.github.io/color-picker/)

## Development

### Prerequisites

- Bun 1.3+

### Setup

```bash
bun install
```

### Commands

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `bun run dev`        | Start development server           |
| `bun run build`      | Build for production               |
| `bun run preview`    | Preview production build           |
| `bun run check`      | Run Biome formatter and linter     |
| `bun run test`       | Run tests with Vitest              |
| `bun run typecheck`  | Run TypeScript type checking       |

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
bun run check
bun run typecheck
bun run test
```

3. Open a pull request to `main`. CI will automatically run format/lint checks, type checking, and tests.
