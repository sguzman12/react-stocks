module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "import/no-unresolved": "warn",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "warn",
    "no-unused-vars": "warn",
    "import/prefer-default-export": "warn",
    "arrow-body-style": "warn",
    "prefer-arrow-callback": "off",
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["..*"],
      },
    ],
  },
};
