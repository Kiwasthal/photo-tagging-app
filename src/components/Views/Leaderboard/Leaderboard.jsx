import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background-color: #fff;
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
  padding: 1 5px;
`;

const TopTimesDisplayer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  font-size: 24px;
`;

const Leaderboard = topUsers => {
  return (
    <StyledLBdModal
      className="modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ButtonContainer>
        <button>Level Select</button>
        <button>Level One</button>
        <button>Level Two</button>
        <button>Level Three</button>
        <button>Level Four</button>
        <button>Home</button>
      </ButtonContainer>
      <TopTimesDisplayer>
        {topUsers.topUsers.length > 0
          ? topUsers.topUsers.map(user => (
              <button key={user.id}>{user.name}</button>
            ))
          : null}
        <button
          onClick={() =>
            console.log(topUsers.topUsers.map(user => console.log(user.name)))
          }
        >
          hey
        </button>
      </TopTimesDisplayer>
    </StyledLBdModal>
  );
};

export default Leaderboard;
