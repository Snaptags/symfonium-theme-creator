module.exports = {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix"
    ],
    "*.{css,json,md}": [
      "node_modules/.bin/prettier --write"
    ]
};
