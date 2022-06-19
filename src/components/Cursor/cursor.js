import useMousePosition from '../../Hooks/useMousePosition';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { CursorContext } from './CursorContextProvider';
import { useLocation } from 'react-router-dom';

const FixedCursor = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
`;

const CursorSvg = styled.svg.attrs(props => ({
  style: {
    opacity: `${props.opacity && props.x > 1 ? 1 : 0}`,
    strokeWidth: `${props.mistake.mistake ? 2 : 1}`,
    left: props.x,
    top: props.y,
    transform: `translate(-50%, -50%) scale(${
      props.mistake.mistake ? 2 : props.cursor.active ? 2.5 : 1
    })`,
    stroke: `${
      props.mistake.mistake ? 'red' : props.cursor.active ? 'black' : 'black'
    }`,
    fill: `${props.cursor.active} ` ? 'rgba(255, 255, 255, .5' : 'black',
  },
}))`
  position: absolute;

  transition: transform 0.2s ease-in-out;
`;

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor, , mistake, setMistake] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (mistake) setTimeout(() => setMistake(false), 6000);
  }, [mistake, setMistake]);
  return (
    <FixedCursor>
      <CursorSvg
        opacity={isVisible}
        cursor={cursor}
        mistake={mistake}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        x={clientX}
        y={clientY}
      >
        <circle cx="25" cy="25" r="8" />
        <line
          x1="31"
          y1="31"
          x2="40"
          y2="40"
          stroke="black"
          strokeWidth="3"
          opacity="1"
          x="55px"
        ></line>
      </CursorSvg>
    </FixedCursor>
  );
};

export default Cursor;
