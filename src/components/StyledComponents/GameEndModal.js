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
const GameEndModal = () => {
  return (
    <Backdrop>
      <StyledModal
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button>SUBMIT SCORE</button>
      </StyledModal>
    </Backdrop>
  );
};

export default GameEndModal;
