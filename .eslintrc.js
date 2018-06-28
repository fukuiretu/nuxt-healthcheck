module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['standard'],
  rules: {
    'space-before-function-paren': ['off'],
    'standard/computed-property-even-spacing': 'off'
  }
}