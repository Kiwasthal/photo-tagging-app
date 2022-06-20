import styled from 'styled-components';
import waldoBadge from '../../Assets/waldoBadge.jpeg';
import wandaBadge from '../../Assets/wandaBadge.png';
import odlawBadge from '../../Assets/odlawBadge.webp';
import wizardBadge from '../../Assets/wizardBadge.jpg';

const StyledRightPartition = styled.div`
  grid-area: 1/ 3 / 2 / 4;
  display: flex;
  flex-direction: column;
`;

const StyledLeftPartition = styled.div`
  grid-area: 1/ 1 / 2 / 2;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  height: 50%;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50%;
`;

const ImageWrapperRight = styled(ImageWrapper)`
  height: 50%;
  background-size: 110%;
  background-position: 50%;
`;

const Badge = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border: 2px solid black;
  background-color: ${props => props.color};
  filter: drop-shadow(0px 3px 3px ${props => props.color});
  top: 75%;
  left: 30%;
  transition: all 200ms ease-out;
`;

export const LeftPartition = ({ waldoFound, wandaFound }) => (
  <StyledLeftPartition>
    <ImageWrapper background={waldoBadge}>
      <Badge color={waldoFound} />
    </ImageWrapper>
    <ImageWrapper background={wandaBadge}>
      <Badge color={wandaFound} />
    </ImageWrapper>
  </StyledLeftPartition>
);
export const RightPartition = ({ odlawFound, wizardFound }) => (
  <StyledRightPartition>
    <ImageWrapperRight background={odlawBadge}>
      <Badge color={odlawFound} />
    </ImageWrapperRight>
    <ImageWrapperRight background={wizardBadge}>
      <Badge color={wizardFound} />
    </ImageWrapperRight>
  </StyledRightPartition>
);
