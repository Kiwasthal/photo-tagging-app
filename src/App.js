import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import CursorContextProvider from './components/Cursor/CursorContextProvider';
import Cursor from './components/Cursor/cursor';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

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
  top: 0%;
  left: 0%;
  right: -50%;
  word-wrap: break-word;

  position: absolute;
  transform: rotate(330deg);
  font-size: 11rem;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    39deg,
    rgba(255, 255, 255, 1) 13%,
    rgba(242, 10, 66, 1) 63%,
    rgba(194, 20, 39, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const App = () => {
  return (
    <AppBackground>
      <Cursor />
      <Router>
        <AnimatedRoutes />
      </Router>

      <BackGroundTitle>WHERE IS WALDO?</BackGroundTitle>
    </AppBackground>
  );
};

export default App;
