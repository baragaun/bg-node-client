# Using bg-node-client Locally

## Method 1: Local Path Installation

1. Find out the path to the bg-node-client directory in finder (macos) or file explorer (windows).
2. Run the following command in your project directory where you want to install it:
```bash
pnpm add file:/path/to/bg-node-client
```
for example: `pnpm add /Users/raghvindyadav/GitHub/bg-node-client`

3. In your project's package.json, the dependency will look like this using with the local path:
```json
{
  "dependencies": {
     "@baragaun/bg-node-client": "link:/Users/raghvindyadav/GitHub/bg-node-client",
  }
}
```
4. If you something change in the bg-node-client, you need to rebuild it and then run `pnpm install` in your project directory. Sometimes maybe you need to run `pnpm install --force` to force the installation.

## Method 2: Direct GitHub Installation with a branch name (Recommended)

1. Add the package to your project:
```bash
pnpm add https://github.com/baragaun/bg-node-client.git#branch-name
```

2. To update to the latest version:
```bash
pnpm install https://github.com/baragaun/bg-node-client.git#branch-name
```

## Development Workflow

When making changes to bg-node-client while using it in another project:

1. Make your changes in bg-node-client
2. Build the package:
```bash
pnpm run build
```
3. Push changes to the main branch
4. In your consuming project:
```bash
pnpm install https://github.com/baragaun/bg-node-client.git
```

## Development Requirements

- Node.js >= 22.11
- pnpm package manager
- Git

## Notes

- Always build the package (`pnpm run build`) before linking or installing locally
- The package uses TypeScript, ensure your project has TypeScript support
- The package includes RxDB for local database management
- GraphQL types are auto-generated using codegen
