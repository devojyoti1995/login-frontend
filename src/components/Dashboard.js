import React from "react";

// import Navbar from "./Navbar";
function Dashboard(props) {
  return (
    <>
      <div className="user">
        <div>
          Username: <b>{props.username}</b>
        </div>
        <button onClick={props.logoutHandler}>Log Out</button>
      </div>
    </>
  );
}
export default Dashboard;
