import { useState, useEffect } from "react";
import UsersList from "../../features/usersList/UsersList";
import "./home.scss"

const Home = () => {
  const [users, setUsers] = useState([]);

  const clickHandler = async () => {
    await fetch("https://gorest.co.in/public/v1/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error!! " + error));
  };

  useEffect(() => {
    clickHandler();
  }, []);
  return (
    <div className="home-root">
        {
        Object.keys(users).length === 0 ? (
        <div><img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt="" /></div>
      ) : (
        
      users?.map((userInfo, index) => {
        return (
          <UsersList
            key={userInfo.id}
            nameUser={userInfo.name}
            statusUser={userInfo.status}
            idUser={userInfo.id}
            gender={userInfo.gender}
            users={users}
          />
        );
      })
      )
      
      }
    </div>
  );
};

export default Home;
