import styled from 'styled-components';
import LeaderBoardModal from '../../StyledComponents/LeaderBoardModal';
import UserCard from '../../StyledComponents/userCard';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BGimg from '../../../Assets/LeaderBG.png';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';
import { useEffect } from 'react';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2vh;
`;

const TopTimesDisplayer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 2 / 1 / 3 / 2;
  padding: 2vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(auto-fill, 5%);
  grid-template-columns: max-content;
  background: url(${BGimg});
  background-repeat: no-repeat;
  background-position: 100% 87%;

  font-size: 24px;
`;

const ScoresButton = styled.button``;

const Leaderboard = ({ topUsers }) => {
  const location = useLocation();
  const [active, setActive] = useState('');
  const activateLvlOne = () => setActive('one');
  const activateLvlTwo = () => setActive('two');
  const activateLvlThree = () => setActive('three');
  const activateLvlFour = () => setActive('four');
  const cursorHandlers = useCursorHandlers();

  useEffect(() => {
    LoadCorrectLB(location.state, setActive);
  }, [location.state]);

  return (
    <LeaderBoardModal>
      <ButtonContainer>
        <Link to={'/level-select'}>
          <button {...cursorHandlers}>Level Select</button>
        </Link>
        <button {...cursorHandlers} onClick={activateLvlOne}>
          Level One
        </button>
        <button {...cursorHandlers} onClick={activateLvlTwo}>
          Level Two
        </button>
        <button {...cursorHandlers} onClick={activateLvlThree}>
          Level Three
        </button>
        <button {...cursorHandlers} onClick={activateLvlFour}>
          Level Four
        </button>

        <Link to={'/'}>
          <button {...cursorHandlers}>Home</button>
        </Link>
      </ButtonContainer>
      <TopTimesDisplayer>
        {displayTimeTables(active, topUsers)}
      </TopTimesDisplayer>
    </LeaderBoardModal>
  );
};

export default Leaderboard;

const LoadCorrectLB = (prevPath, activate) => {
  switch (prevPath) {
    case '/level-one':
      break;
    case '/level-two':
      activate('two');
      break;
    case '/level-three':
      activate('three');
      break;
    case '/level-four':
      activate('four');
      break;
    default:
      activate('one');
  }
};

function displayTimeTables(active, userTableOne) {
  switch (active) {
    case 'one':
      return userTableOne.length > 0
        ? userTableOne
            .sort((a, b) => Number(a.time) - Number(b.time))
            .map((user, index) => (
              <UserCard key={user.id} user={user} index={index} />
            ))
        : null;
    default:
  }
}
