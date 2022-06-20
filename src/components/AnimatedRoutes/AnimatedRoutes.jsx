import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Views/Home/Home';
import { AnimatePresence } from 'framer-motion';
import LevelSelect from '../Views/LevelSelect/LevelSelect';
import LevelOne from '../Views/Levels/LevelOne';
import LevelTwo from '../Views/Levels/LevelTwo';
import LevelThree from '../Views/Levels/LevelThree';
import LevelFour from '../Views/Levels/LevelFour';
import Leaderboard from '../Views/Leaderboard/Leaderboard';

const AnimatedRoutes = ({ clock, userInfo, topUsers }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home userInfo={userInfo} />} />
        <Route path="/level-select" element={<LevelSelect />} />
        <Route
          path="/level-one"
          element={<LevelOne clock={clock} userName={userInfo.value} />}
        />
        <Route
          path="/level-two"
          element={<LevelTwo clock={clock} userName={userInfo.value} />}
        />
        <Route
          path="/level-three"
          element={<LevelThree clock={clock} userName={userInfo.value} />}
        />
        <Route
          path="/level-four"
          element={<LevelFour clock={clock} userName={userInfo.value} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
