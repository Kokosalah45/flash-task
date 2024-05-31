import { Outlet } from 'react-router';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
const MainLayout = () => {
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
            <Link
              className="bg-slate-300 hover:bg-slate-400 transition-all rounded-md px-3 py-2"
              to="/checkout"
            >
              Checkout
            </Link>
            <Link
              className="bg-slate-300 hover:bg-slate-400 transition-all rounded-md px-3 py-2"
              to="/login"
            >
              Login
            </Link>
          </div>
        }
      />
      <main className="flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
