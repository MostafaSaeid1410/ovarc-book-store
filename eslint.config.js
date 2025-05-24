import pluginImport from "eslint-plugin-import"; /* Provides rules for proper imports/exports in JavaScript */
import pluginJsxA11y from "eslint-plugin-jsx-a11y"; /* Enforces accessibility best practices in JSX */
import pluginPrettier from "eslint-plugin-prettier"; /* Integrates Prettier with ESLint */
import pluginReact from "eslint-plugin-react"; /* Contains React-specific linting rules */
import pluginReactHooks from "eslint-plugin-react-hooks"; /* Contains rules for React Hooks */
import globals from "globals"; /* Provides pre-defined global variables for different environments */
import * as tseslint from "typescript-eslint"; /* The TypeScript parser and plugin for ESLint */
import prettierConfig from "eslint-config-prettier"; /* Turns off ESLint rules that conflict with Prettier */

/** @type {import('eslint').Linter.Config[]} */ //This comment helps with type check and auto complete
export default [
  // ignores object specify files and directories to make the eslint ignore it and don't check it
  {
    ignores: [
      "node_modules/**/*",
      "build/**",
      "dist/**",
      "coverage/**",
      "package-lock.json",
      "eslint.config.js",
      "routeTree.gen.ts",
    ],
  },
  // Base ESLint recommended rules for .js, .jsx, .ts, .tsx files
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022, // Use the ES2022 specification
      sourceType: "module", // Treat files as ES modules
    },

    rules: {
      // Overrides ESLint rules
      "no-console": ["warn", { allow: ["warn", "error", "info"] }], // Warns about console usage but allows the usage of console.warn, console.error, and console.info
      eqeqeq: ["error", "smart"], // Requires the use of === and !== instead of == and !=
      "no-var": "error", // Disallows var declarations in favor of let and const
      "prefer-const": "error", // Enforces using const for variables that are never reassigned
    },
  },

  // TypeScript files configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser, // Uses the TypeScript parser
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.app.json"], // Array of TypeScript configuration files to use
        ecmaFeatures: { jsx: true }, // Enables JSX parsing
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      }, // Adds browser and Node.js global variables
    },
    plugins: {
      "typescript-eslint": tseslint.plugin,
    }, // Registers the TypeScript ESLint plugin
    rules: {
      // Apply typescript-eslint recommended rules
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules,

      // Override some TypeScript rules
      "typescript-eslint/no-explicit-any": "warn", // Warns when any type is used
      "typescript-eslint/explicit-function-return-type": "off", // Allowing to infer return types for functions
      "typescript-eslint/explicit-module-boundary-types": "off", // Allowing to infer return types for exported functions
      "typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-ignore": "allow-with-description",
        },
      ], // Allow // @ts-ignore only with a descriptive comment
      "typescript-eslint/no-non-null-assertion": "warn", // Warns about non-null assertions (!)
      "typescript-eslint/no-empty-function": "error", // Warn about empty functions
      "typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ], // Configures unused variables rule to ignore variables and parameters starting with underscore
    },
  },

  // JavaScript/TypeScript + React configuration
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: { version: "detect" }, // Tells ESLint to detect React version automatically
    },
    rules: {
      // React recommended rules
      ...pluginReact.configs.recommended.rules,

      // React hooks rules
      ...pluginReactHooks.configs.recommended.rules,

      // JSX A11y recommended rules
      ...pluginJsxA11y.configs.recommended.rules,

      // Override some React rules
      "react/prop-types": "off", // Turns off prop-types validation
      "react/react-in-jsx-scope": "off", // Turns off requiring React import
      "react/jsx-curly-brace-presence": ["error", "never"], // Enforces not using curly braces when unnecessary in JSX
      "react/jsx-boolean-value": ["error", "never"], // Enforces shorthand for boolean props
      "react/self-closing-comp": "error", // Requires self-closing for components without children
      "react/jsx-fragments": ["error", "syntax"], // Enforces Fragment shorthand syntax

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error", // Enforces Rules of Hooks as errors
      "react-hooks/exhaustive-deps": "warn", // Warns about missing dependencies in useEffect and similar hooks,
      "react/jsx-no-useless-fragment": "warn", // Warns about useless react fragments
    },
  },

  // Import rules configuration
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      import: pluginImport,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ], // Enforces order of imports
      "import/first": "error", // Enforces that imports are at the top of the file
      "import/no-duplicates": "error", // Disallows duplicate imports
      "import/no-useless-path-segments": "error", // Disallows unnecessary path segment
    },
  },

  // Prettier integration
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Makes Prettier formatting issues ESLint errors
      ...prettierConfig.rules,
    },
  },

  // Test files specific overrides
  {
    files: ["**/*.{test,spec}.{js,ts,jsx,tsx}", "**/__tests__/**"],
    rules: {
      "typescript-eslint/no-explicit-any": "off",
      "typescript-eslint/ban-ts-comment": "off",
    },
  },
];
