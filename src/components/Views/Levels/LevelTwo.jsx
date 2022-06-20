import styled from 'styled-components';
import levelImage from '../../../Assets/levelTwo.jpg';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';
import GameEndModal from '../../StyledComponents/GameEndModal';
import LevelContainer from '../../StyledComponents/LevelContainer';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase';
import {
  RightPartition,
  LeftPartition,
} from '../../StyledComponents/LevelPartitions';

const SearchBox = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  outline: 5px solid transparent;
  width: 65px;
  height: 65px;
  border: 5px solid #84cc16;
  border-radius: 50px;

  z-index: 1999;
  transition: all 200ms ease-in-out;
`;

const WaldoBox = styled(SearchBox)`
  right: -83.3%;
  top: 78%;
  opacity: ${props => props.attrs.opacity};
`;

const OdLawBox = styled(SearchBox)`
  left: 29.7%;
  top: 68%;
  opacity: ${props => props.attrs.opacity};
`;

const WandaBox = styled(SearchBox)`
  left: 46.8%;
  top: 43%;
  opacity: ${props => props.attrs.opacity};
`;

const WizardBox = styled(SearchBox)`
  left: 4.8%;
  top: 81.2%;
  opacity: ${props => props.attrs.opacity};
`;

const LevelImage = styled.img`
  grid-area: 1 / 2 / 2 / 3;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const LevelTwo = ({ clock, userName }) => {
  const location = useLocation();
  const [, , mistake, setMistake] = useContext(CursorContext);
  const cursorHandlers = useCursorHandlers();
  const [gameOver, setGameOver] = useState(false);
  const [waldoDisplay, setWaldoDisplay] = useState({
    opacity: 0,
    transform: '',
  });
  const [odLawDisplay, setOdLawDisplay] = useState({
    opacity: 0,
    transform: '',
  });
  const [wandaDisplay, setWandaDisplay] = useState({
    opacity: 0,
    transform: '',
  });
  const [wizardDisplay, setWizardDisplay] = useState({
    opacity: 0,
    transform: '',
  });

  const hideAll = () => {
    setOdLawDisplay({ opacity: 0 });
    setWaldoDisplay({ opacity: 0 });
    setWandaDisplay({ opacity: 0 });
    setWizardDisplay({ opacity: 0 });
  };

  const characterClicked = set => {
    if (!mistake)
      set({
        opacity: 1,
        transform: 'scale(1)',
      });
  };

  const waldoClicked = e => {
    e.stopPropagation();
    characterClicked(setWaldoDisplay);
  };

  const odLawClicked = e => {
    e.stopPropagation();
    characterClicked(setOdLawDisplay);
  };

  const wandaClicked = e => {
    e.stopPropagation();
    characterClicked(setWandaDisplay);
  };

  const wizardClicked = e => {
    e.stopPropagation();
    characterClicked(setWizardDisplay);
  };

  const cursorHandleMistake = useCallback(() => {
    if (!mistake) setMistake(() => ({ mistake: true }));
  });

  useEffect(() => {
    const gameEnd = () => {
      clock.setRunning(false);
      hideAll();
      setGameOver(true);
    };
    if (
      waldoDisplay.opacity === 1 &&
      odLawDisplay.opacity === 1 &&
      wandaDisplay.opacity === 1 &&
      wizardDisplay.opacity === 1
    )
      gameEnd();
  });

  const levelTwoCollectionRef = collection(db, 'level-two');

  const createUserSegmentTwo = async () => {
    if (userName === '')
      await addDoc(levelTwoCollectionRef, {
        name: 'Anonymous',
        time: clock.timeLapsed,
      });
    else
      await addDoc(levelTwoCollectionRef, {
        name: userName,
        time: clock.timeLapsed,
      });
  };

  useEffect(() => {
    clock.setRunning(true);
  }, [location]);
  return (
    <LevelContainer>
      <LeftPartition
        waldoFound={waldoDisplay.opacity === 1 ? '#84cc16' : '#dc2626'}
        wandaFound={wandaDisplay.opacity === 1 ? '#84cc16' : '#dc2626'}
      />
      <RightPartition
        odlawFound={odLawDisplay.opacity === 1 ? '#84cc16' : '#dc2626'}
        wizardFound={wizardDisplay.opacity === 1 ? '#84cc16' : '#dc2626'}
      />
      <WaldoBox
        attrs={waldoDisplay}
        {...cursorHandlers}
        onClick={waldoClicked}
      />
      <OdLawBox
        attrs={odLawDisplay}
        {...cursorHandlers}
        onClick={odLawClicked}
      />
      <WandaBox
        attrs={wandaDisplay}
        {...cursorHandlers}
        onClick={wandaClicked}
      />
      <WizardBox
        attrs={wizardDisplay}
        {...cursorHandlers}
        onClick={wizardClicked}
      />
      <LevelImage
        src={levelImage}
        attrs={waldoDisplay}
        {...cursorHandlers}
        onClick={cursorHandleMistake}
      />
      {gameOver ? (
        <GameEndModal
          name={userName}
          time={clock.timeLapsed}
          addSegment={createUserSegmentTwo}
        />
      ) : null}
    </LevelContainer>
  );
};

export default LevelTwo;
