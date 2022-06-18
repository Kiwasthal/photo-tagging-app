import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext, useCallback } from 'react';
import { CursorContext } from '../Cursor/CursorContextProvider';

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
  justify-content: center;
`;

const NameInput = styled.input``;

const Modal = () => {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const hoverHandler = {
    onMouseEnter: toggleCursor,
    onMouseLeave: toggleCursor,
  };

  return (
    <ModalWrapper
      className="modal orange-gradient"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NameInput placeholder="Enter your Name" {...hoverHandler} />
      <Link
        to={'/level-select'}
        style={{ cursor: 'none' }}
        onClick={toggleCursor}
        {...hoverHandler}
      >
        <button>Close</button>
      </Link>
    </ModalWrapper>
  );
};

export default Modal;
