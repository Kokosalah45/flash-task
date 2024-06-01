import { BASE_URL, baseRouter } from '../base-router';

export const authRouter = baseRouter.extend({
  prefixUrl: `${BASE_URL}/auth`,
});
