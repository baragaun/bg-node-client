// @ts-check
import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

// This is just an example default config for ESLint.
// You should change it to your needs following the documentation.
export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  // 'plugin:import/typescript',
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    // other configs...
  },
  {
    files: ['src/**/*.ts', 'src/**/*.mts'],
    ignores: [
      '**/lib/**',
      '**/tmp/**',
      '**/coverage/**',
      '/node_modules/**',
      '/tools/**',
      '/src/schema/**',
      '/src/graphql/gql/**',
      '/src/fsdata/graffle/**',
    ],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    // other configs...
  },
  {
    extends: [...tseslint.configs.recommended],

    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
    },

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',

      globals: {
        ...globals.node,
      },

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    files: ['/src/fsdata/graffle/**'],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
    },
  },
  {
    files: ['/src/test/**'],

    plugins: {
      vitest,
    },

    rules: {
      ...vitest.configs.recommended.rules,
    },

    settings: {
      vitest: {
        typecheck: true,
      },
    },

    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    ignores: [
      '**/lib/**',
      '**/tmp/**',
      '**/coverage/**',
      '/node_modules/**',
      '/tools/**',
      '/src/schema/**',
      '/src/graphql/gql/**',
      '/src/fsdata/graffle/**',
    ],
  },
);
