import { authRouter } from './auth-router';

export type LoginBody = {
  email: string;
  password: string;
};

export type UserSessionData = {
  name: string;
  email: string;
};

export const signin = async (body: LoginBody) => {
  const res = await authRouter.post('signin', {
    json: body,
    credentials: 'include',
  });

  return res.json<UserSessionData>();
};

export const signout = async () => {
  await authRouter.post('signout', {
    credentials: 'include',
    json: {},
  });
};

export const getUser = async () => {
  const res = await authRouter.get('me', {
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Not authenticated');
  }
  return res.json<UserSessionData>();
};
