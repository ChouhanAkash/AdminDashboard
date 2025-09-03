import React from "react";

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="user-info">
        <img src={user.photoURL} alt="Profile" className="profile-pic"/>
        <span>{user.name}</span>
      </div>
    </header>
  );
};

export default Header;
