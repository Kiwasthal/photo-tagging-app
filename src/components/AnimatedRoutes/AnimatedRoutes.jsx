import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Views/Home/Home';
import { AnimatePresence } from 'framer-motion';
import LevelSelect from '../Views/LevelSelect/LevelSelect';
import LevelOne from '../Views/Levels/LevelOne';
import Leaderboard from '../Views/Leaderboard/Leaderboard';

const AnimatedRoutes = ({ clock, userInfo, topUsers, addSegment }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home userInfo={userInfo} />} />
        <Route path="/level-select" element={<LevelSelect />} />
        <Route
          path="/level-one"
          element={
            <LevelOne
              clock={clock}
              userName={userInfo.value}
              addSegment={addSegment}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard topUsers={topUsers} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
