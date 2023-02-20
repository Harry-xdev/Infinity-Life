import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {
  const questionEndPointA = 'https://6268162901dab900f1c9969b.mockapi.io/appi/v1/engQuest';
  const ansEndPointA = 'https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList';
  const questionEndPointB = 'https://63eddd2f388920150dd47775.mockapi.io/newQuest';
  const ansEndPointB = 'https://63eedb395e9f1583bdc850f3.mockapi.io/api/v1/userList';

  const [questEndPoint, setQuestEndPoint] = useState(questionEndPointA);
  const [ansEndPoint, setAnsEndPoint] = useState(ansEndPointA);

  // const switchToA = () => {
  //   setQuestEndPoint(questionEndPointA);
  //   setAnsEndPoint(ansEndPointA);
  // };
  const switchToB = () => {
    setQuestEndPoint(questionEndPointB);
    setAnsEndPoint(ansEndPointB);
  };
  const checkLimitation = () => {
    if(data.length > 99) {
      switchToB();
    };
  };
  setTimeout(() => {
    checkLimitation();
  }, 0);

  const [data, setData] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [vietNamAnswer, setVietNamAnswer] = React.useState([]);
  const [vietNamAnswerB, setVietNamAnswerB] = React.useState([]);

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

  const getDataB = async () => {
    try {
      const response = await fetch('https://63eddd2f388920150dd47775.mockapi.io/newQuest');
      const json = await response.json();
      setDataB(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const getRandomAnswerDataB = async () => {
    try {
      const response = await fetch('https://63eedb395e9f1583bdc850f3.mockapi.io/api/v1/userList');
      const json = await response.json();
      setVietNamAnswerB(json);
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
    getDataB();
    getRandomAnswerData();
    getRandomAnswerDataB();
    getUserData();

  }, []);


  console.log('Data A:', data);
  console.log('Data B:', dataB);
  console.log('Random answer A:', vietNamAnswer);
  console.log('Random answer B:', vietNamAnswerB);
  console.log('User Data:', userData);

  return (

    <GolobalContext.Provider value={{
      data,dataB, vietNamAnswer, vietNamAnswerB, userData
    }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
