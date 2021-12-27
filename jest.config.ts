import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '@vue/vue3-jest',
  },
  testRegex: '/__tests__/.+\\.test.ts$',
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**.{ts,vue}',
    '!<rootDir>/*.config.ts',
    '!**/*.d.ts',
    '!<rootDir>/.nuxt/**',
    '!**/node_modules/**',
    '!**/__tests__/**',
  ],
}
export default config
