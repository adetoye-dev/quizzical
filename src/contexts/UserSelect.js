import React, { useContext, useMemo, useState } from "react";

const userContext = React.createContext();

export const useUserSelect = () => {
  return useContext(userContext);
};

const UserSelect = ({ children }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const contextValues = useMemo(() => {
    category, difficulty, setCategory, setDifficulty;
  }, [category, difficulty]);

  return (
    <userContext.Provider value={contextValues}>
      {children}
    </userContext.Provider>
  );
};

export default UserSelect;
