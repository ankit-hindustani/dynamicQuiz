import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">Ankit Singh</h2>
        <img className="circle-img" src='public/images/ankit_pic_fullPass.jpeg' alt="profile_picture" />
      </div>
      <div className="bottom">
        <p className="info">+91 9455837582 </p>
        <p className="info">namaste.ankitsingh@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;