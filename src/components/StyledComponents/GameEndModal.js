import { StyledModal } from './Modal';
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop';

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

const GameEndModal = ({ name, time, addSegment }) => {
  return (
    <Backdrop>
      <StyledModal
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>TIME : {formatTime(time)}</p>
        <Link to={'/leaderboard'}>
          <button onClick={addSegment}>SUBMIT SCORE</button>
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
