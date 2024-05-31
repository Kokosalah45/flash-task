import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <BrowserRouter>{children} </BrowserRouter>
    </AuthProvider>
  );
}
