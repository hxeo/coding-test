import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

const presetConfig = createCjsPreset();

const config: Config = {
  ...presetConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['<rootDir>/solutions/**/*.spec.ts', '<rootDir>/src/**/*.spec.ts'],
  moduleNameMapper: {
    // Maps the Module Federation remote path to the actual file so Jest can
    // resolve it without a running federation host.
    '^vehicleDetail/VehicleDetailComponent$':
      '<rootDir>/solutions/part2-mfe/vehicle-detail/vehicle-detail.component.ts',
  },
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
};

export default config;
