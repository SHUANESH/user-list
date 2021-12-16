import React from "react";
import { Link } from "react-router-dom";
import "./usersList.scss"
import {iconUserMale, iconUserFemale} from '../../accessories/accessories'


const UsersList = ({ nameUser, statusUser, idUser, users, gender }) => {
  const userStatus = statusUser === "active" ? "active" : "notActive";
  const genderIcon = gender==='male'? iconUserMale : iconUserFemale
  return (
    <div
      key={idUser}
      className="usersList-root"
    >
      <img src={genderIcon} alt="" />
      <h2>{nameUser.slice(0,15)}</h2>
      <span className={userStatus}>{statusUser}</span>
      <Link className="single-link" to={`/single-user/${idUser}`}>click for more...</Link>
    </div>
  );
};

export default UsersList;
