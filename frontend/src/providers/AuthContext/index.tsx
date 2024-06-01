import {
  UserSessionData,
  getUser,
  signin,
  signout,
} from '@/services/data/auth';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextType = {
  user: UserSessionData | null;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  authState: AuthState;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserSessionData | null>(null);
  const [authState, setAuthState] = useState<AuthState>('loading');

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
        setAuthState('authenticated');
      })
      .catch(() => {
        setAuthState('unauthenticated');
      });
  }, []);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState('loading');
    signin({
      email,
      password,
    })
      .then((user) => {
        setUser(user);
        setAuthState('authenticated');
      })
      .catch(() => {
        setAuthState('unauthenticated');
      });
  };

  const logout = () => {
    signout()
      .then(() => {
        setUser(null);
        setAuthState('unauthenticated');
      })
      .catch(() => {
        setUser(null);
        setAuthState('unauthenticated');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        authState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
