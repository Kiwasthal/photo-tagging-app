import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home/Home';

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AnimatedRoutes;
