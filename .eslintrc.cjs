module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  ignorePatterns: [
    'dist/',
    'node_modules/',
    'coverage/',
    'build/',
  ],

  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};