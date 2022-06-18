import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Views/Home/Home';
import { AnimatePresence } from 'framer-motion';
import LevelSelect from '../Views/LevelSelect/LevelSelect';
import LevelOne from '../Views/Levels/LevelOne';

const AnimatedRoutes = ({ clock }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/level-select" element={<LevelSelect />} />
        <Route path="/level-one" element={<LevelOne clock={clock} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
