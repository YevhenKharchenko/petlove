import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/components/SharedLayout/SharedLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
