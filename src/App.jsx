import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './shared/components/SharedLayout/SharedLayout.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { RestrictedRoute } from './components/RestrictedRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage.jsx'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage.jsx'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage.jsx'));
const FriendsPage = lazy(() => import('./pages/FriendsPage/FriendsPage.jsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/profile" component={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/profile" component={<LoginPage />} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute redirectTo="/home" component={<ProfilePage />} />}
        />
        <Route
          path="add-pet"
          element={<PrivateRoute redirectTo="/home" component={<AddPetPage />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
