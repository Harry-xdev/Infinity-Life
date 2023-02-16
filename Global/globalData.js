import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [vietNamAnswer, setVietNamAnswer] = React.useState([]);
  const [userData, setUserData] = useState([]);

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

  const getUserData = async () => {
    try {
      const response = await fetch('https://63eddd2f388920150dd47775.mockapi.io/userAccount');
      const json = await response.json();
      setUserData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
    getRandomAnswerData();
    getUserData();

  }, []);


  console.log('Global data vietnamAnswer:', vietNamAnswer);
  console.log('user data:', userData);




  return (

    <GolobalContext.Provider value={{
      data, vietNamAnswer, getData, getRandomAnswerData, userData
    }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
