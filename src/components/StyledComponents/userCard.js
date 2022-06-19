import styled from 'styled-components';
import { formatTime } from './GameEndModal';

const StyledCard = styled.div`
  display: flex;
  border-bottom: 2px solid #e7e5e4;
  align-items: center;
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
