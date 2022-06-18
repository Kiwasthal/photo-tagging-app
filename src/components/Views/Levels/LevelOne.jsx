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
  cursor: none;
`;

const SearchCursor = styled.div.attrs(props => ({
  style: {
    top: props.y,
    left: props.x,
  },
}))`
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
`;

const LevelOne = () => {
  const [imagehovered, isImageHovered] = useHover(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  const cursor = e => {
    setMouseX(e.clientX + 'px');
    setMouseY(e.clientY + 'px');
  };

  return (
    <LevelContainer
      onClick={e => e.stopPropagation()}
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LevelImage ref={imagehovered} onMouseMove={cursor}>
        {isImageHovered ? <SearchCursor x={mouseX} y={mouseY} /> : null}
      </LevelImage>
    </LevelContainer>
  );
};

export default LevelOne;
