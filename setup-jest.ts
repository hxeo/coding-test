import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';
import {
  jest, describe, it, test, expect,
  beforeEach, afterEach, beforeAll, afterAll,
} from '@jest/globals';

setupZonelessTestEnv();

// Assign Jest globals explicitly so they are available in all test files (even on stackblitz)
Object.assign(globalThis, {
  jest, describe, it, test, expect,
  beforeEach, afterEach, beforeAll, afterAll,
});
