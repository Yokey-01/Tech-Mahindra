import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <>
      <Number />
      <Count />
      <ProfilePic userId={1} /><br></br>
      <Clock />
    </>
  );
};

const Number = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  return <>Random Number:{randomNumber}<br /></>;
};



const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
  <>
    <button onClick={() => setCount(count + 1)}>Count: {count}</button><br />
    </>
  );
};
export {Count}


const ProfilePic = ({ userId }) => {
    const users = {
        1: "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
      };      
  const profilePicUrl = users[userId];
  return (
    <>
      Profile Pic:
      <br />
      <img src={profilePicUrl} alt="User Profile" width={500}/>
    </>
  );
};
export {ProfilePic}
const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
    <>Current Time:{time.toLocaleTimeString()}</>
);
  };
export default App;