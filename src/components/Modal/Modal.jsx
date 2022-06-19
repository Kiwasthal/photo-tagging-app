import { motion } from 'framer-motion';
import styled from 'styled-components';
import modalPic from '../../Assets/waldoBG.png';
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
  background-image: url(${modalPic});
  background-position: 5% 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  width: clamp(50%, 500px, 90%);
  height: min(50%, 300px);
  padding: 0 2rem;
  border-radius: 12px;
  z-index: 1001;
  display: flex;
  justify-content: center;
  gap: 20%;
  align-items: center;
  flex-direction: column;
`;

const NameInput = styled.input`
  font-size: clamp(60%, 32px, 24px);
  border: 2px solid red;
  color: red;
  background-color: #e7e5e4;
  margin-left: 23%;
  width: clamp(60%, 500px, 50%);
`;

const StartButton = styled.button`
  transform: scale(1);
  transition: all 200ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const Modal = ({ userInfo }) => {
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
      <NameInput
        placeholder="Enter your Name"
        {...hoverHandler}
        {...userInfo}
      />
      <Link to={'/level-select'} onClick={toggleCursor} {...hoverHandler}>
        <StartButton>START</StartButton>
      </Link>
    </ModalWrapper>
  );
};

export default Modal;
