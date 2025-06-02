#!/bin/sh

pnpm graffle
pnpm codegen
git checkout -- src/fsdata/graffle/modules/select.ts
git checkout -- src/fsdata/graffle/modules/client.ts
git checkout -- src/fsdata/gql/gql.ts
git checkout -- src/fsdata/gql/index.ts
git checkout -- src/fsdata/graffle/modules/methods-document.ts
pnpm lint --fix
