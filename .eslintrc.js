module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  plugins: ['jsx-a11y', 'prettier', 'jest', 'import'],
  rules: {
    'class-methods-use-this': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never' },
    ],
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': [2, { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'error',
    'react/no-did-mount-set-state': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      alias: {
        map: [
          ['src', './src'],
          ['@common', './src/common'],
          ['@pages', './src/pages'],
        ],
        extensions: ['.js', '.json'],
      },
    },
  },
  globals: {
    __DEV__: true,
  },
};
