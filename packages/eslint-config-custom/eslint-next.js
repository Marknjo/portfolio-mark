module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // react
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],

    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    'react/react-in-jsx-scope': 'off',

    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',

    'react/function-component-definition': 'off',

    // next
    '@next/next/no-html-link-for-pages': 'off',

    '@typescript-eslint/no-use-before-define': 'off',
  },
  // overrides: [
  //   {
  //     // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
  //     env: {
  //       jest: false,
  //     },
  //     files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  //     extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
  //     rules: {
  //       'import/no-extraneous-dependencies': [
  //         'off',
  //         { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
  //       ],
  //     },
  //   },
  // ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
