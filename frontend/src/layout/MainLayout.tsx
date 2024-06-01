import { Outlet } from 'react-router';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import { useAuth } from '@/providers/AuthContext';
import { Button } from '@/components/ui/button';
const MainLayout = () => {
  const { authState, logout } = useAuth();
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        StartComponent={
          <Link to="/">
            <h1 className="text-2xl font-bold">E-commerce</h1>
          </Link>
        }
        EndComponent={
          <div className="flex gap-5">
            {authState === 'unauthenticated' || authState === 'loading' ? (
              <Link
                className="bg-slate-300 hover:bg-slate-400 transition-all rounded-md px-3 py-2"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <Button onClick={logout}>Logout</Button>
            )}
            <Link
              className="bg-slate-300 hover:bg-slate-400 transition-all rounded-md px-3 py-2"
              to="/checkout"
            >
              Checkout
            </Link>
          </div>
        }
      />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
