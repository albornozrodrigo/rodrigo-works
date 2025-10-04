export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|webp|avif)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^swipe/swipe-cards$': '<rootDir>/__mocks__/swipe/swipeCards.tsx',
  },
  modulePathIgnorePatterns: ['e2e'],
};
