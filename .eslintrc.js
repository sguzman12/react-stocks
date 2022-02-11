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
  extends: ["prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
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
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["..*"],
      },
    ],
  },
};
