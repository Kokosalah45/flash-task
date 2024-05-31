import { Outlet } from 'react-router';
const MainLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
