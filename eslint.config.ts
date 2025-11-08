import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ignores: ["dist/**", "node_modules/**", "build/**"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      js,
      react: pluginReact,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint.plugin,
    },

    // 🔧 Conjuntos de regras base
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // ✅ Boas práticas gerais
      eqeqeq: ["error", "always"],
      "no-console": ["warn"],
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // ♿️ Acessibilidade máxima
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": [
        "error",
        { components: ["Link"], aspects: ["invalidHref", "preferButton"] },
      ],
      "jsx-a11y/label-has-associated-control": "error",

      // ⚛️ Regras React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "error",
      "react/self-closing-comp": "warn",
      "react/jsx-boolean-value": ["error", "never"],

      // 🎨 Prettier (formatação automática)
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
];
