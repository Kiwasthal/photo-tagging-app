import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const StyledLevelContainer = styled(motion.div)`
  width: 90%;
  height: 90%;
  background-color: white;
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  padding: 10px;
`;

const LevelContainer = ({ children }) => {
  return (
    <StyledLevelContainer
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledLevelContainer>
  );
};

export default LevelContainer;
