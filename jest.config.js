module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
  'moduleNameMapper': {
    '@app/(.*)': '<rootDir>/src/app/*'
  }
};
