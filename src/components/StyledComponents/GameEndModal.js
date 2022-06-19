import { StyledModal } from './Modal';
import { Link, useLocation } from 'react-router-dom';
import Backdrop from './Backdrop';
import useCursorHandlers from '../../Hooks/useCursorHandlers';
import { useState } from 'react';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const GameEndModal = ({ time, addSegment }) => {
  const location = useLocation();
  const cursorHandlers = useCursorHandlers();
  return (
    <Backdrop>
      <StyledModal
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>TIME : {formatTime(time)}</p>
        <Link
          to={{
            pathname: '/leaderboard',
            state: { prevPath: location.pathname },
          }}
        >
          <button onClick={addSegment} {...cursorHandlers}>
            SUBMIT SCORE
          </button>
        </Link>
      </StyledModal>
    </Backdrop>
  );
};

export const formatTime = time => {
  let mins = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  let sec = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
  let mils = ('0' + Math.floor((time / 10) % 100)).slice(-2);

  return `${mins} : ${sec} : ${mils}`;
};

export default GameEndModal;
