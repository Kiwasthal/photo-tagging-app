import useMousePosition from '../../Hooks/useMousePosition';
import styled from 'styled-components';
import { useContext } from 'react';
import { CursorContext } from './CursorContextProvider';

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
    left: props.x,
    top: props.y,
    transform: `translate(-50%, -50%) scale(${props.cursor.active ? 2.5 : 1})`,
    stroke: `${props.cursor.active ? 'black' : 'red'}`,
    fill: `${props.cursor.active}` ? 'rgba(255, 255, 255, .5' : 'black',
  },
}))`
  position: absolute;
  stroke-width: 1;
  transition: transform 0.2s ease-in-out;
`;

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  return (
    <FixedCursor>
      <CursorSvg
        cursor={cursor}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        x={clientX}
        y={clientY}
      >
        <circle cx="25" cy="25" r="8" />
      </CursorSvg>
    </FixedCursor>
  );
};

export default Cursor;
