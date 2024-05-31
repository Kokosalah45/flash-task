import ky from 'ky';

const BASE_URL = 'http://localhost:3000/api';

export const baseRouter = ky.create({
  prefixUrl: `${BASE_URL}/api`,
});
