import React, { createContext } from "react";

export const DataContext = createContext();

const DatasStore = ({ children }) => {
  const me = {
    name: "Patrick",
    age: 23,
  };

  return <DataContext.Provider value={me}>{children}</DataContext.Provider>;
};

export default DatasStore;
