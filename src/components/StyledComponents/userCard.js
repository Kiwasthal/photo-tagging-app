import styled from 'styled-components';
import { formatTime } from './GameEndModal';

const StyledCard = styled.div`
  display: flex;
`;

const UserCard = user => {
  return (
    <StyledCard>
      <span>
        {user.user.name} : {formatTime(user.user.time)}
      </span>
    </StyledCard>
  );
};

export default UserCard;
