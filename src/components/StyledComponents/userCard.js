import styled from 'styled-components';
import { formatTime } from './GameEndModal';

const StyledCard = styled.div`
  display: flex;
  border-bottom: 2px solid #e7e5e4;
  width: 20%;
  align-items: center;

  font-size: calc(13px + (21 - 16) * ((100vw - 300px) / (1600 - 300)));
`;

const UserCard = ({ user, index }) => {
  return (
    <StyledCard>
      <span>
        {index + 1}. {user.name} : {formatTime(user.time)}
      </span>
    </StyledCard>
  );
};

export default UserCard;
