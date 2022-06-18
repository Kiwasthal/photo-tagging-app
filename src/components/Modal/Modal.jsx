import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.05,
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

const ModalWrapper = styled(motion.div)`
  display: grid;
  justify-items: center;
`;

const NameInput = styled.input`
  width: 50%;
  justify-self: center;
`;

const Modal = () => {
  return (
    <ModalWrapper
      className="modal orange-gradient"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NameInput placeholder="Enter your Name" />
      <Link to={'/level-select'}>
        <button>Close</button>
      </Link>
    </ModalWrapper>
  );
};

export default Modal;
