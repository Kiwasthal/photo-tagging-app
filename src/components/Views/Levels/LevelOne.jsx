import styled from 'styled-components';
import { LevelContainer } from '../../StyledComponents/LevelContainer';
import levelImage from '../../../Assets/levelOne.jpg';
import useHover from '../../../Hooks/useHover';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GameEndModal from '../../StyledComponents/GameEndModal';

const swirl = {
  hidden: {
    transform: 'scale(0) rotate(720deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotate(0deg)',
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
  exit: {
    transform: 'scale(0) rotate(-720deg)',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const LevelImage = styled.img`
  position: relative;
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const WaldoBox = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  outline: 5px solid transparent;
  width: 60px;
  height: 60px;
  border: 5px solid #84cc16;
  border-radius: 50px;
  right: -79%;
  top: 3%;
  z-index: 1999;
  transition: all 500ms ease-in-out;
  opacity: ${props => props.attrs.opacity};
`;

const LevelOne = ({ clock }) => {
  const [imagehovered, isImageHovered] = useHover(false);
  const [, setCursor, , setMistake] = useContext(CursorContext);
  const [gameOver, setGameOver] = useState(false);
  const [waldoDisplay, setWaldoDisplay] = useState({
    opacity: 0,
    transform: '',
  });

  const waldoClicked = e => {
    e.stopPropagation();
    setWaldoDisplay({
      opacity: 1,
      transform: 'scale(1)',
    });
    gameEnd();
  };

  const gameEnd = () => {
    clock.setRunning(false);
    setGameOver(true);
  };

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const cursorHandleMistake = useCallback(() => {
    setMistake(() => ({ mistake: true }));
  });

  const hoverHandler = {
    onMouseEnter: toggleCursor,
    onMouseLeave: toggleCursor,
  };

  return (
    <LevelContainer
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <WaldoBox attrs={waldoDisplay} {...hoverHandler} />
      {gameOver ? <GameEndModal /> : null}
      <LevelImage
        ref={imagehovered}
        src={levelImage}
        {...hoverHandler}
        onClick={cursorHandleMistake}
      />
    </LevelContainer>
  );
};

export default LevelOne;
