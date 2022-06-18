import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 1003;
`;

const Backdrop = ({ children }) => {
  return (
    <StyledBackdrop
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
