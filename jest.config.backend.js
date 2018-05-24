module.exports = {
  displayName: 'backend',

  moduleFileExtensions: [
    'js',
    'mjs'
  ],

  setupTestFrameworkScriptFile: './jest.setup.backend.js',

  testEnvironment: 'node',

  testMatch: [
    '<rootDir>/app/backend/**/*.test.?(m)js'
  ],

  transform: {
    '^.+\.m?js$': 'babel-jest'
  }
};
