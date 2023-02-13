import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/engQuest');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
  console.log('Global data:', data);


  return (

    <GolobalContext.Provider value={{
      data, test
    }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
