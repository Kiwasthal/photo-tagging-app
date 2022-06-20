import styled from 'styled-components';
import levelImage from '../../../Assets/levelOne.jpg';
import { CursorContext } from '../../Cursor/CursorContextProvider';
import { useCallback, useContext } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useCursorHandlers from '../../../Hooks/useCursorHandlers';
import GameEndModal from '../../StyledComponents/GameEndModal';
import LevelContainer from '../../StyledComponents/LevelContainer';
import waldoImage from '../../../Assets/waldoBG.png';
import odlawImage from '../../../Assets/odlawBg.jpg';

const LevelTwo = () => {
  return <LevelContainer></LevelContainer>;
};

export default LevelTwo;
