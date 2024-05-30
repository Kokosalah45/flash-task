import { AuthProvider } from './AuthContext';

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
