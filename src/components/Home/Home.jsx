import Modal from '../Modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    console.log('e');
    window.addEventListener('load', openModal);
  }, []);
  return (
    <div>
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? closeModal() : openModal())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
