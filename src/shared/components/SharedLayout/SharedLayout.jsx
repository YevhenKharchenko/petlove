import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Header from '../../../components/Header/Header.jsx';

const SharedLayout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
