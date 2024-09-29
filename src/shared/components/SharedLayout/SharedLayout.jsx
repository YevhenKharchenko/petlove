import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../../../components/Header/Header.jsx';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default SharedLayout;
