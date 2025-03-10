# Graffle

[Graffle can generate a client](https://graffle.js.org/guides/topics/generation) with this:

```bash
pnpm graffle
```

It will use the config file `graffle.config.ts`. 

This generates a lot of TS/Lint errors. 

### Lint/TS Fixes:

`src/fsdata/graffle/modules/client.ts`, replace the last line with:

```ts
// @ts-ignore
export const create: typeof $$Utilities.createConstructorWithContext = $$Utilities.createConstructorWithContext(context);
```

### Mock Remote Responses

See: https://graffle.js.org/examples/transport-http/custom-fetch

## To Do

* Create the client once, then set the headers on each
  request, see: https://graffle.js.org/examples/transport-http/dynamic-headers
