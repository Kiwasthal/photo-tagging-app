import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const dropIn = {
  hidden: {
    top: '-100vh',
    opacity: 0,
    transition: {
      delay: 10,
    },
  },
  visible: {
    top: '45px',
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    top: '100vh',
    opacity: 0,
  },
};

const LevelTimer = styled(motion.div)`
  position: absolute;
  border-radius: 30px;
  transform: rotate(-30deg);
  width: 160px;
  height: 50px;
  background-color: red;
  bottom: 0;
  left: 20px;
  z-index: 9999;
`;

const Timer = () => {
  const location = useLocation();

  if (location.pathname === '/level-one')
    return (
      <LevelTimer
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    );
};

export default Timer;
