import '@testing-library/jest-dom/vitest';
import { vitest } from 'vitest';

import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

/*@types  */
globalThis.ResizeObserver = vitest.fn().mockImplementation(() => ({
  observe: vitest.fn(),
  unobserve: vitest.fn(),
  disconnect: vitest.fn(),
}));

beforeAll(() => {
  server.listen();
  server.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted:', request.method, request.url);
  });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
