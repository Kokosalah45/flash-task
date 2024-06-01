import Page from '@/components/layout/Page';
import LoginForm from '@/features/login/components/LoginForm';
import { useAuth } from '@/providers/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { authState } = useAuth();

  if (authState === 'authenticated') {
    return <Navigate to="/" />;
  }

  return (
    <Page className="flex p-5 items-center justify-center flex-1">
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
