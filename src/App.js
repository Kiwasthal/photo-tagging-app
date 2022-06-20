import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import CursorContextProvider from './components/Cursor/CursorContextProvider';
import Cursor from './components/Cursor/cursor';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import Timer from './components/Timer/Timer';
import { useState } from 'react';
import useInput from './Hooks/useInput';
import { db } from './Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const AppBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 0;
  flex-wrap: wrap;
  position: fixed;
`;

const BackGroundTitle = styled.h1`
  top: 5%;
  left: -50%;
  right: -50%;

  position: absolute;
  transform: rotate(335deg);
  text-align: center;
  font-size: 16rem;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    39deg,
    rgba(255, 255, 255, 1) 13%,
    rgba(242, 10, 66, 1) 63%,
    rgba(194, 20, 39, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const user = useInput('');

  const clock = {
    timeLapsed: time,
    isRunning: running,
    setTimeLapsed: setTime,
    setRunning: setRunning,
  };

  return (
    <CursorContextProvider>
      <Cursor />
      <AppBackground>
        <Router>
          <Timer clock={clock} />
          <AnimatedRoutes clock={clock} userInfo={user} />
        </Router>

        <BackGroundTitle>
          WHERE IS
          <br /> WALDO?
        </BackGroundTitle>
      </AppBackground>
    </CursorContextProvider>
  );
};

export default App;
