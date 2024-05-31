import { authRouter } from './auth-router';

type LoginBody = {
  id: string;
  email: string;
};

type UserSessionData = {
  id: string;
  name: string;
  email: string;
};

export const login = async (body: LoginBody) => {
  const res = await authRouter.post('signin', {
    json: body,
  });

  return res.json<UserSessionData>();
};
