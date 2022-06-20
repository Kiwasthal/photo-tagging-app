import styled from 'styled-components';
import LeaderBoardModal from '../../StyledComponents/LeaderBoardModal';
import UserCard from '../../StyledComponents/userCard';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BGimg from '../../../Assets/LeaderBG.png';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';
import { useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2vh;
`;

const TopTimesDisplayer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  align-items: space-evenly;
  height: 90%;
  width: 100%;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  background: url(${BGimg});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  font-size: 24px;
`;

const ScoresButton = styled.button``;

const Leaderboard = () => {
  const location = useLocation();
  const cursorHandlers = useCursorHandlers();
  const [active, setActive] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [lvlOneTopTimes, setlvlOneTopTimes] = useState([]);
  const [lvlTwoTopTimes, setlvlTwoTopTimes] = useState([]);
  const activateLvlOne = () => setActive('one');
  const activateLvlTwo = () => setActive('two');
  const activateLvlThree = () => setActive('three');
  const activateLvlFour = () => setActive('four');

  useEffect(() => {
    LoadCorrectLB(location.state.prevPath, setActive);
    setLoaded(true);
  }, []);

  useEffect(
    () =>
      onSnapshot(collection(db, 'level-one'), snapshot =>
        setlvlOneTopTimes(
          snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'level-two'), snapshot =>
        setlvlTwoTopTimes(
          snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

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

        <button
          {...cursorHandlers}
          onClick={() => {
            console.log(location.state);
          }}
        >
          Home
        </button>
      </ButtonContainer>
      <TopTimesDisplayer>
        {loaded
          ? displayTimeTables(active, lvlOneTopTimes, lvlTwoTopTimes)
          : null}
      </TopTimesDisplayer>
    </LeaderBoardModal>
  );
};

export default Leaderboard;

const LoadCorrectLB = (prevPath, activate) => {
  switch (prevPath) {
    case '/level-one':
      activate('one');
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

function displayTimeTables(active, userTableOne, userTableTwo) {
  switch (active) {
    case 'one':
      return userTableOne.length > 0
        ? userTableOne
            .sort((a, b) => Number(a.time) - Number(b.time))
            .map((user, index) => (
              <UserCard key={user.id} user={user} index={index} />
            ))
        : null;
    case 'two':
      return userTableTwo.length > 0
        ? userTableTwo
            .sort((a, b) => Number(a.time) - Number(b.time))
            .map((user, index) => (
              <UserCard key={user.id} user={user} index={index} />
            ))
        : null;
    default:
  }
}
