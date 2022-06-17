import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backgrop';
import { Link } from 'react-router-dom';

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

const Modal = () => {
  return (
    <motion.div
      onClick={e => e.stopPropagation()}
      className="modal orange-gradient"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link to={'/level-select'}>
        <button>Close</button>
      </Link>
    </motion.div>
  );
};

export default Modal;
