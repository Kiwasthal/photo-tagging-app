import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const dropIn = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: '-100vh',
    opacity: 0,
  },
};

const LevelSelectContainer = styled(motion.div)`
  width: 50%;
  height: 50%;
  background-color: white;
`;

const LevelSelect = () => {
  return (
    <LevelSelectContainer
      onClick={e => e.stopPropagation()}
      className="modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Select level</h1>
    </LevelSelectContainer>
  );
};

export default LevelSelect;
