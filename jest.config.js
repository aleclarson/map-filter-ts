module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^map-filter-ts$': '<rootDir>/src/index.ts',
  },
  transform: {
    '\\.tsx?$': ['esbuild-jest', { sourcemap: true }],
  },
}
