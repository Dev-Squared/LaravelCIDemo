module.exports = {
    testRegex: 'resources/assets/js/test/.*.test.js$',
    moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],
    'transform': {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
  }