import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LevelContainer = styled(motion.div)`
  width: 90%;
  height: 90%;
  background-color: white;
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  padding: 10px;
`;
