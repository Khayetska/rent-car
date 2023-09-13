import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import sass from './Layout.module.scss';

function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
}

export default Layout;
