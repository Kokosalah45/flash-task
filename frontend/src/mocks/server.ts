import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Provide the server-side API with the request handlers.
const server = setupServer(...handlers);

export { server };
