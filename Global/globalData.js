import { set } from "immer/dist/internal";
import React, { createContext, useState, useEffect } from "react";

const GolobalContext = createContext();

const ContextProvider = ({ children }) => {
  const questRender = 'https://awsome-project-backend2.onrender.com/engQuest';
  const ansRender = 'https://awsome-project-backend2.onrender.com/vnAnswerList';
  const userRender = 'https://awsome-project-backend2.onrender.com/userAccount';
  const userMockApi = 'https://63eddd2f388920150dd47775.mockapi.io/userAccount';

  const questLocal = 'http://192.168.168.192:4000/engQuest';
  const ansLocal = 'http://192.168.168.192:4000/vnAnswerlist';
  const userLocal = 'http://192.168.168.192:4000/userAccount';

  const monthRender = 'https://awsome-project-backend2.onrender.com/march';
  const monthLocal = 'http://192.168.168.192:4000/march';

  const monthSumLocal = 'http://192.168.168.192:4000/monthSum';
  const monthSumRender = 'https://awsome-project-backend2.onrender.com/monthSum';



  // const [questEndPoint, setQuestEndPoint] = useState(questRender);
  // const [ansEndPoint, setAnsEndPoint] = useState(ansRender);
  // const [userEndPoint, setUserEndPoint] = useState(userRender);

  const [questEndPoint, setQuestEndPoint] = useState(questRender);
  const [ansEndPoint, setAnsEndPoint] = useState(ansRender);
  const [userEndPoint, setUserEndPoint] = useState(userMockApi);

  const [data, setData] = useState([]);
  const [vietNamAnswer, setVietNamAnswer] = React.useState([]);
  const [vietNamAnswerB, setVietNamAnswerB] = React.useState([]);

  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [monthServer, setMonthServer] = useState(monthLocal)
  const [monthData, setMonthData] = useState([]);
  const [monthSumData, setMonthSumData] = useState([]);
  const [monthSumServer, setMonthSumServer] = useState(monthSumLocal);

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

  const getMonthData = async () => {
    try {
      const res = await fetch(monthServer);
      const json = await res.json();
      setMonthData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getMonthSum = async () => {
    try {
      const res = await fetch(monthSumServer);
      const json = await res.json();
      setMonthSumData(json);

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
    getMonthData();
    getMonthSum();

  }, []);
  
  const [currentDate, setCurrentDate] = useState();
  const [hours, setHours] = useState(0);
  const [current, setCurrent] = useState(0);

  // const [dt, setDt] = useState(new Date().toLocaleString());
  // useEffect (() => {
  //   let secTimer = setInterval(() => {
  //     setDt(new Date().toLocaleString());
  //     setCurrent(new Date().getDate() - 1);
  //   }, 21600);

  //   return () => clearInterval(secTimer);
  // }, []);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + '  '
      + hours + ':' + min
    );
    setHours(hours);
    setCurrent(date - 1);

  }, []);
  console.log('Data A:', data);
  console.log('Random answer A:', vietNamAnswer);
  console.log('month data:', monthData);
  console.log('month SUM data:', monthSumData);


  return (

    <GolobalContext.Provider
      value={{ data, vietNamAnswer, questEndPoint, ansEndPoint, userData, userEndPoint, monthData, monthServer, monthSumData, current }}>
      {children}
    </GolobalContext.Provider>
  );
};
export { ContextProvider, GolobalContext };
