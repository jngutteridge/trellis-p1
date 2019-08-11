import React from "react";

export default ({ user }) => (
    <div className="user">
        { user['profilePictureUrl'] != null && <img src={user['profilePictureUrl']} alt="Profile" /> }
        <h3 className="name">{ user['name'] }</h3>
        <h3 className="email">{ user['email'] }</h3>
    </div>
);
