import { useState, useEffect } from "react";
import UsersList from "../../features/usersList/UsersList";
import "./home.scss";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [pagination, setPagination] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [UserMessage, setUserMessage] = useState("");

  const [lodging, setLodging] = useState("https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg");




  const clickHandler = async () => {
    // pageNum <= 0 || pagination.pages <=0
       await fetch(`https://gorest.co.in/public/v1/users`)
          .then((res) => res.json())
          .then((res) => {
            setPagination(res.meta.pagination);
            setUsers(res.data);
          })
          .catch((error) => console.error("Error!! " + error))
  //     : await fetch(`https://gorest.co.in/public/v1/users?page=${pageNum}`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           setPagination(res.meta.pagination);
  //           setUsers(res.data);
  //         })
  //         .catch((error) => console.error("Error!! " + error));
  };

  const next = async() =>{
    await fetch(`${pagination.links.next}`)
    .then((res) => res.json())
    .then((res) => {
      setPagination(res.meta.pagination);
      setUsers(res.data);
    })
    setIsChange(true)

  }
  const previous = async() =>{
    await fetch(`${pagination.links.previous}`)
    .then((res) => res.json())
    .then((res) => {
      setPagination(res.meta.pagination);
      setUsers(res.data);
    })
    setIsChange(false)

  }
  

  useEffect(() => {
    // if( pageNum >= pagination.pages){
    //   setPageNum(0)
    // }
    clickHandler();
  }, []);
  console.log(pagination.pages);
  console.log(users);
  return (
    <div className="home-root">
      <div className="home-images">
        {Object.keys(users).length === 0 ? (
          <div>
            {
              setTimeout(() => {
                setLodging("")
                setUserMessage("You seem to have reached the last page Please go back")
              }, 5000)
            }
            <img
              src={lodging}
              alt=""
            />
            <h1>{UserMessage}</h1>
          </div>
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
        )}
        
        {/* {
          users.length === 0?<div>this the last page....</div> :""
        } */}

      </div>
      <div className="home-button">
        <button onClick={() => previous()}>perv</button>
        <button onClick={() => next()}>next</button>
      </div>
    </div>
  );
};

export default Home;
