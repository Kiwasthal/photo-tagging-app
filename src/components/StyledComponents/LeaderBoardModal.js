import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const StyledLBdModal = styled(motion.div)`
  background-position: 5% 100%;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: clamp(50%, 500px, 90%);
  height: 90%;
  width: 80%;
  padding: 0 2rem;
  border-radius: 12px;
  z-index: 1001;
  display: gird;
  grid-template-rows: 10% 1fr;
`;

const LeaderBoardModal = ({ children }) => {
  return (
    <StyledLBdModal
      className="modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledLBdModal>
  );
};

export default LeaderBoardModal;
