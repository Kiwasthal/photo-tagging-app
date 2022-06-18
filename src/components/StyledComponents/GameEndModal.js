import { motion } from 'framer-motion';
import styled from 'styled-components';
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

const Modal = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);

  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameEndModal = () => {
  return (
    <Backdrop>
      <Modal variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <button>SUBMIT SCORE</button>
      </Modal>
    </Backdrop>
  );
};

export default GameEndModal;
