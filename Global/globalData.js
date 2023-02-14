import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [vietNamAnswer, setVietNamAnswer] = React.useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  console.log('Global data:', data);
  const getRandomAnswerData = async () => {
    try {
      const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList');
      const json = await response.json();
      setVietNamAnswer(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();
    getRandomAnswerData();

  }, []);
  console.log('Global data vietnamAnswer:', vietNamAnswer);



  return (

    <GolobalContext.Provider value={{
      data, vietNamAnswer
    }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
