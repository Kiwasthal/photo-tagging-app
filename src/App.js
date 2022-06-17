import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

const AppBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <AppBackground>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AppBackground>
  );
};

export default App;
