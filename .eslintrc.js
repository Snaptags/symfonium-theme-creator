module.exports = {
  extends: [
    "eslint:recommended",
    "react-app",
    "react-app/jest",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", //  Make sure to put it last, so it gets the chance to override other configs.
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"], // enforce good testing practices
      plugins: ["testing-library"],
    },
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off", // this gets really ugly when using complex types e.g. for Redux
    "@typescript-eslint/explicit-module-boundary-types": "off", // this gets really ugly when using complex types e.g. for Redux
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
          },
        ],
      },
    ],
  },
};
