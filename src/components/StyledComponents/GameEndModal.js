import { StyledModal } from './Modal';
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
const GameEndModal = ({ name, time }) => {
  const TrueTime =
    ('0' + Math.floor((time / 60000) % 60)).slice(-2) +
    ('0' + Math.floor((time / 1000) % 60)).slice(-2);
  return (
    <Backdrop>
      <StyledModal
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {' '}
        <p>
          TIME : {('0' + Math.floor((time / 60000) % 60)).slice(-2)} :
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </p>
        <button>SUBMIT SCORE</button>
      </StyledModal>
    </Backdrop>
  );
};

export default GameEndModal;
