import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/components/SharedLayout/SharedLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NewsPage from './pages/NewsPage/NewsPage.jsx';
import NoticesPage from './pages/NoticesPage/NoticesPage.jsx';
import FriendsPage from './pages/FriendsPage/FriendsPage.jsx';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
