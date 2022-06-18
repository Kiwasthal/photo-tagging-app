import useMousePosition from '../../Hooks/useMousePosition';
import styled from 'styled-components';

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
    transform: 'translate(-50%, -50%)',
  },
}))`
  position: absolute;
`;

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <FixedCursor>
      <CursorSvg
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
