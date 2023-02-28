import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {
  const questRender = 'https://awsome-project-backend2.onrender.com/engQuest';
  const ansRender = 'https://awsome-project-backend2.onrender.com/vnAnswerList';
  const userRender = 'https://awsome-project-backend2.onrender.com/userAccount';

  const userMockApi = 'https://63eddd2f388920150dd47775.mockapi.io/userAccount';

  const questLocal = 'http://172.18.10.231:4000/engQuest';
  const ansLocal = 'http://172.18.10.231:4000/vnAnswerlist';
  const userLocal = 'http://172.18.10.231:4000/userAccount';

  // const [questEndPoint, setQuestEndPoint] = useState(questRender);
  // const [ansEndPoint, setAnsEndPoint] = useState(ansRender);
  // const [userEndPoint, setUserEndPoint] = useState(userRender);

  const [questEndPoint, setQuestEndPoint] = useState(questLocal);
  const [ansEndPoint, setAnsEndPoint] = useState(ansLocal);
  const [userEndPoint, setUserEndPoint] = useState(userMockApi);


  // const switchToA = () => {
  //   setQuestEndPoint(questRender);
  //   setAnsEndPoint(ansRender);
  // };
  // const switchToB = () => {
  //   setQuestEndPoint(questLocal);
  //   setAnsEndPoint(ansLocal);
  // };
  // const checkLimitation = () => {
  //   if(data.length > 99) {
  //     switchToB();
  //   };
  // };
  // setTimeout(() => {
  //   checkLimitation();
  // }, 0);

  const [data, setData] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [vietNamAnswer, setVietNamAnswer] = React.useState([]);
  const [vietNamAnswerB, setVietNamAnswerB] = React.useState([]);

  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(questEndPoint);
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
      const response = await fetch(ansEndPoint);
      const json = await response.json();
      setVietNamAnswer(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const getDataB = async () => {
  //   try {
  //     const response = await fetch('https://63eddd2f388920150dd47775.mockapi.io/newQuest');
  //     const json = await response.json();
  //     setDataB(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const getRandomAnswerDataB = async () => {
  //   try {
  //     const response = await fetch('https://63eedb395e9f1583bdc850f3.mockapi.io/api/v1/userList');
  //     const json = await response.json();
  //     setVietNamAnswerB(json);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  const getUserData = async () => {
    try {
      const response = await fetch(userEndPoint);
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


  console.log('Data A:', data);
  console.log('Random answer A:', vietNamAnswer);
  // console.log('User Data NEW :', userData);

  return (

    <GolobalContext.Provider
      value={{ data, vietNamAnswer, userData, questEndPoint, ansEndPoint, userData, userEndPoint }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
