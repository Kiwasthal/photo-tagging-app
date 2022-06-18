import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LevelContainer = styled(motion.div)`
  width: 90%;
  height: 90%;
  background-color: white;
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  @media (max-width: 768px) {
    height: 50%;
  }
  @media (max-width: 480px) {
    height: 70%;
    width: 93%;
  }
  @media (max-width: 1023px) {
    height: 46%;
    width: 93%;
  }
`;
