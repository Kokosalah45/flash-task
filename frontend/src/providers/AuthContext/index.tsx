import { createContext, useContext, useEffect, useState } from 'react';

type UserSessionData = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextType = {
  user: UserSessionData | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  state: AuthState;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserSessionData | null>(null);
  const [state, setState] = useState<AuthState>('loading');

  useEffect(() => {
    fetch('http://localhost:3000/api/auth/session', {
      method: 'GET',
      credentials: 'include',
    })
      .then(async (res) => {
        if (res.ok) {
          const user = (await res.json()) as UserSessionData;
          setUser(user);
          setState('authenticated');
        } else {
          setState('unauthenticated');
        }
      })
      .catch(() => {
        setState('unauthenticated');
      });
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setState('unauthenticated');
      return;
    }

    const user = (await res.json()) as UserSessionData;

    setUser(user);
    setState('authenticated');
  };

  const logout = () => {
    fetch('http://localhost:3000/api/auth/signout', {
      method: 'GET',
    });

    setUser(null);
    setState('unauthenticated');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        state,
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
