import styled from 'styled-components';
import { motion } from 'framer-motion';
import UserCard from '../../StyledComponents/userCard';
import { Link } from 'react-router-dom';
import BGimg from '../../../Assets/LeaderBG.png';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const StyledLBdModal = styled(motion.div)`
  background-position: 5% 100%;
  background-repeat: no-repeat;
  background-color: #ffffff;
  width: clamp(50%, 500px, 90%);
  height: 90%;
  width: 80%;
  padding: 0 2rem;
  border-radius: 12px;
  z-index: 1001;
  display: gird;
  grid-template-rows: 10% 1fr;
`;

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

const Leaderboard = ({ topUsers }) => {
  const cursorHandlers = useCursorHandlers();
  return (
    <StyledLBdModal
      className="modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ButtonContainer>
        <Link to={'/level-select'}>
          <button {...cursorHandlers}>Level Select</button>
        </Link>
        <button {...cursorHandlers}>Level One</button>
        <button {...cursorHandlers}>Level Two</button>
        <button {...cursorHandlers}>Level Three</button>
        <button {...cursorHandlers}>Level Four</button>

        <Link to={'/'}>
          <button {...cursorHandlers}>Home</button>
        </Link>
      </ButtonContainer>
      <TopTimesDisplayer>
        {topUsers.length > 0
          ? topUsers
              .sort((a, b) => Number(a.time) - Number(b.time))
              .map((user, index) => (
                <UserCard key={user.id} user={user} index={index} />
              ))
          : null}
      </TopTimesDisplayer>
    </StyledLBdModal>
  );
};

export default Leaderboard;
