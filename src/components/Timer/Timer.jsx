import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
    top: '55px',
    opacity: 1,
    transition: {
      delay: 2,
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
  transform: rotate(-38deg);
  width: 180px;
  height: 60px;
  background-color: red;
  bottom: 0;
  left: 40px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Timer = () => {
  const [time, setTime] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTime(0);
  }, [location]);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10);
    return () => clearInterval(interval);
  });

  if (location.pathname === '/level-one')
    return (
      <LevelTimer
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </LevelTimer>
    );
};

export default Timer;
