## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev

# npm
npm run dev

# yarn
yarn dev

# bun
bun run dev
```

```

## Story Integrity Testing

This project includes an automated story integrity checker to ensure all story paths are properly connected.

### Running Story Tests

```bash
# Check story integrity
npm run test:story

# Run all tests (includes story check)
npm test
```

### What the checker validates:
- ✅ All referenced step IDs are properly defined
- ✅ All story steps are reachable from the start
- ✅ Non-ending steps have proper options
- ✅ Story flow integrity

For detailed information about the story checking tool, see [STORY_CHECK.md](./STORY_CHECK.md).

## Production

````
