import styled from 'styled-components';
import { LevelContainer } from '../../StyledComponents/LevelContainer';
import levelImage from '../../../Assets/levelOne.jpg';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GameEndModal from '../../StyledComponents/GameEndModal';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import waldoImage from '../../../Assets/waldoBG.png';
import odlawImage from '../../../Assets/odlawBg.jpg';

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

const StyledRightPartition = styled.div`
  grid-area: 1/ 3 / 2 / 4;
  background: url(${odlawImage});
  background-repeat: no-repeat;
  background-position: 80% 100%;
  background-size: 100px;
  position: relative;
`;

const Badge = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border: 2px solid black;
  background-color: ${props => props.color};
  filter: drop-shadow(0px 3px 3px ${props => props.color});
  top: 85%;
  left: 30%;
  transition: all 200ms ease-out;
`;

const StyledLeftPartition = styled.div`
  position: relative;
  grid-area: 1/ 1 / 2 / 2;
  background: url(${waldoImage});
  background-repeat: no-repeat;
  background-position: 80% 100%;
  background-size: 100px;
`;

const SearchBox = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  outline: 5px solid transparent;
  width: 65px;
  height: 65px;
  border: 5px solid #84cc16;
  border-radius: 50px;

  z-index: 1999;
  transition: all 500ms ease-in-out;
`;

const WaldoBox = styled(SearchBox)`
  right: -78%;
  top: 2%;
  opacity: ${props => props.attrs.opacity};
`;

const OdLawBox = styled(SearchBox)`
  left: 2%;
  top: 76%;
  opacity: ${props => props.attrs.opacity};
`;

const LevelOne = ({ clock, userName }) => {
  const location = useLocation();
  const [, setCursor, , setMistake] = useContext(CursorContext);
  const [gameOver, setGameOver] = useState(false);
  const [waldoDisplay, setWaldoDisplay] = useState({
    opacity: 0,
    transform: '',
  });
  const [odLawDisplay, setOdLawDisplay] = useState({
    opacity: 0,
    transform: '',
  });

  const waldoClicked = e => {
    e.stopPropagation();
    setWaldoDisplay({
      opacity: 1,
      transform: 'scale(1)',
    });
  };

  const odlawClicked = e => {
    e.stopPropagation();
    setOdLawDisplay({
      opacity: 1,
      transform: 'scale(1)',
    });
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

  useEffect(() => {
    const gameEnd = () => {
      clock.setRunning(false);
      setGameOver(true);
    };
    if (waldoDisplay.opacity === 1 && odLawDisplay.opacity === 1) gameEnd();
  }, [waldoDisplay, odLawDisplay]);

  useEffect(() => {
    clock.setRunning(true);
  }, [location]);

  return (
    <LevelContainer
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StyledLeftPartition>
        {waldoDisplay.opacity === 1 ? (
          <Badge color="#84cc16" />
        ) : (
          <Badge color="#dc2626" />
        )}
      </StyledLeftPartition>
      <StyledRightPartition>
        {odLawDisplay.opacity === 1 ? (
          <Badge color="#84cc16" />
        ) : (
          <Badge color="#dc2626" />
        )}
      </StyledRightPartition>
      <WaldoBox attrs={waldoDisplay} {...hoverHandler} onClick={waldoClicked} />
      <OdLawBox {...hoverHandler} attrs={odLawDisplay} onClick={odlawClicked} />
      <LevelImage
        src={levelImage}
        {...hoverHandler}
        onClick={cursorHandleMistake}
      />
      {gameOver ? (
        <GameEndModal name={userName} time={clock.timeLapsed} />
      ) : null}
    </LevelContainer>
  );
};

export default LevelOne;
