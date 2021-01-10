module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    semi: 0,
    'react-native/no-inline-styles': 0,
    'comma-dangle': 0,
    'jsx-quotes': 0,
    '@typescript-eslint/no-unused-vars': 0
  }
}
