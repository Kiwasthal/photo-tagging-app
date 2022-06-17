import Modal from '../../Modal/Modal';
import { AnimatePresence } from 'framer-motion';

import { useState } from 'react';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <AnimatePresence initial={true}>
      <Modal modalOpen={modalOpen} />
    </AnimatePresence>
  );
};

export default Home;
