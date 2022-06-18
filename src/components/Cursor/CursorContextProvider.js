import { createContext, useState } from 'react';

export const CursorContext = createContext();

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });
  const [mistake, setMistake] = useState({ mistake: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor, mistake, setMistake]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
