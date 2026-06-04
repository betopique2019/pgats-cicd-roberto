export default {
  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'reports/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text', 'lcov'],

  setupFiles: ['<rootDir>/test/setup.js'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],

  // ESSENCIAL PARA FUNCIONAR COM ES MODULES
  transform: {
  '^.+\\.js$': 'babel-jest'
  }

};