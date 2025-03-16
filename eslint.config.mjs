// @ts-check
import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import nodePlugin from 'eslint-plugin-node';

// This is just an example default config for ESLint.
// You should change it to your needs following the documentation.
export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  // 'plugin:import/typescript',
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
    rules: {
      'import/order': [
        'error',
        {
          groups: [['external', 'builtin'], 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
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
      'node': nodePlugin,
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      'no-unused-vars': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'off',
      'import/no-useless-path-segments': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', // or 'error'
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_'
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unnecessary-path-segments': 'off',
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
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-namespace': 'off',
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
