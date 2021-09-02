module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
  },
};
