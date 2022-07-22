import { Navigate, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route exact path='/reareasoulfood/menu' element={<MenuPage />} />
      <Route path='*' element={<Navigate to="/reareasoulfood/menu" />} />
    </Routes>
  );
}

export default App;
