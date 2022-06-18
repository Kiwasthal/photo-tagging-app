import { motion } from 'framer-motion';
import { useEffect } from 'react';
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
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerText = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
`;

const Timer = ({ clock }) => {
  const location = useLocation();

  useEffect(() => {
    clock.setTimeLapsed(0);
  }, [location]);

  useEffect(() => {
    let interval;
    if (clock.isRunning)
      interval = setInterval(() => {
        clock.setTimeLapsed(prevTime => prevTime + 10);
      }, 10);
    return () => clearInterval(interval);
  }, [clock]);

  if (location.pathname === '/level-one')
    return (
      <LevelTimer
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <TimerText>
          {('0' + Math.floor((clock.timeLapsed / 60000) % 60)).slice(-2)}:
        </TimerText>
        <TimerText>
          {('0' + Math.floor((clock.timeLapsed / 1000) % 60)).slice(-2)}
        </TimerText>
      </LevelTimer>
    );
};

export default Timer;
