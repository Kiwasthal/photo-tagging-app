import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext, useEffect } from 'react';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';

const dropIn = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: '-100vh',
    opacity: 0,
  },
};

const LevelSelectContainer = styled(motion.div)`
  width: 50%;
  height: 50%;
  background-color: white;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LevelsContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LevelSelect = () => {
  const location = useLocation();
  const cursorHandlers = useCursorHandlers();

  return (
    <LevelSelectContainer
      onClick={e => e.stopPropagation()}
      className="modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NavContainer>
        <h1>Select level</h1>
        <Link to={'/leaderboard'} state={{ prevPath: location.pathname }}>
          <button {...cursorHandlers}>Leaderboard</button>
        </Link>
      </NavContainer>
      <LevelsContainer>
        <Link to={'/level-one '}>
          <button {...cursorHandlers}>Level 1</button>
        </Link>
        <Link to={'/level-two '}>
          <button {...cursorHandlers}>Level 2</button>
        </Link>
        <Link to={'/level-three'}>
          <button {...cursorHandlers}>Level 3</button>
        </Link>
        <Link to={'/level-one '}>
          <button {...cursorHandlers}>Level 4</button>
        </Link>
      </LevelsContainer>
    </LevelSelectContainer>
  );
};

export default LevelSelect;
