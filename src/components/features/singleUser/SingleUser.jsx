import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./singleUser.scss"
import { iconUserMale, iconUserFemale } from "../../accessories/accessories";

const SingleUser = () => {
  const [user, setUser] = useState({});

  const userStatus = user.status === "active" ? "active" : "notActive";
  const genderIcon = user.gender === "male" ? iconUserMale : iconUserFemale;

  let { id } = useParams();
  console.log(id);

  const getSingleUser = async () => {
    await fetch(`https://gorest.co.in/public/v1/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data))
      .catch((error) => console.error("Error!! " + error));
  };

  useEffect(() => {
    getSingleUser();

    return () => {
      id = "";
    };
  }, [id]);
  return (
    <div className="single-root">
      {Object.keys(user).length === 0 ? (
        <div><img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt="" /></div>
      ) : (
        <div className ="single-card">
          <img src={genderIcon} alt="" />
          <h3>{user.name}</h3>
          <span>{user.email}</span>
          <span className={userStatus}>{user.status}</span>
          <Link className="singleUser-link" to="/user-list">back to home</Link>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
