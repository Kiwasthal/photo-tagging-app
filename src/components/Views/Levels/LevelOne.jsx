import styled from 'styled-components';
import { LevelContainer } from '../../StyledComponents/LevelContainer';
import levelImage from '../../../Assets/levelOne.jpg';
import useHover from '../../../Hooks/useHover';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext } from 'react';

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

const LevelOne = () => {
  const [imagehovered, isImageHovered] = useHover(false);
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const hoverHandler = {
    onMouseEnter: toggleCursor,
    onMouseLeave: toggleCursor,
  };

  return (
    <LevelContainer
      className="modal"
      variants={swirl}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LevelImage ref={imagehovered} {...hoverHandler} />
    </LevelContainer>
  );
};

export default LevelOne;
