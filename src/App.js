import { useEffect, useState } from 'react';
import './App.css';



function App() {


  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

const clickHandler = async ()=>{
  await fetch("https://gorest.co.in/public/v1/users")
   .then(res => res.json())
   .then(res => setUsers(res.data))
   .catch((error)=> console.error("Error!! "+ error))

   setIsOpen(true);
 }
  return (
    <div className="App" title="app"> 

    <h1>Get User List</h1>
       <button title="get-user-button" onClick={clickHandler}>click me</button>

       {
         isOpen? users?.map((user , index)=>{
           return <div title="app-user-container" key={index} className="app-user-card">
                <h2 title="app-h2-user" style={{color: user.status === "active"? "green": "red"}}>{user.name}</h2>  
                <h5>{user.status}</h5>
           </div>

         }) : ""
       }
    </div>
  );
}

export default App;
