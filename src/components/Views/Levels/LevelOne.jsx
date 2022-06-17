import styled from 'styled-components';
import { LevelContainer } from '../../StyledComponents/LevelContainer';
import levelImage from '../../../Assets/levelOne.jpg';
import { useState } from 'react';
import useHover from '../../../Hooks/useHover';

const swirl = {
  hidden: {
    transform: 'scale(0) rotate(720deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotate(0deg)',
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
  exit: {
    transform: 'scale(0) rotate(-720deg)',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const LevelImage = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  width: 100%;
  background-image: url(${levelImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const cursor = styled.div``;

const LevelOne = () => {
  const [imagehovered, isImageHovered] = useHover(false);

  return (
    <LevelContainer
      onClick={e => e.stopPropagation()}
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LevelImage ref={imagehovered}>
        {isImageHovered ? <div>okay</div> : null}
      </LevelImage>
    </LevelContainer>
  );
};

export default LevelOne;
