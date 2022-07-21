import { Navigate, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MenuPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
