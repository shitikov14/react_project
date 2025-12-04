// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  // Базовые рекомендации ESLint
  js.configs.recommended,

  // Настройки для React кода в src
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // <--- сказать парсеру "в коде есть JSX"
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      // ---- ЛИШНИЕ ПРОБЕЛЫ / ОТСТУПЫ ----
      "no-multi-spaces": "error",                 // несколько пробелов подряд
      "no-trailing-spaces": "error",              // пробелы в конце строки
      indent: ["error", 2, { SwitchCase: 1 }],    // отступы в 2 пробела

      // ---- Реакт-особенности под Vite / новый JSX ----
      "react/react-in-jsx-scope": "off", // React не нужен в импорте
      "react/prop-types": "off",         // не заставляем писать PropTypes
      "no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect", // убирает варнинг "React version not specified"
      },
    },
  },

  // Игнорируем
  //  служебные папки и сам конфиг
  {
    ignores: ["dist/**", "node_modules/**", "eslint.config.js"],
  },
];
