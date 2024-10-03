import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../../../components/Header/Header.jsx';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={null}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
