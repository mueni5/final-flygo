// import React from "react";
// import {NavLink} from 'react-router-dom';


// function ProfileNav(){
//   return(
//     <div style={{backgroundColor:"orange",height:'50px', display:"flex",alignItems:"center"}}>
//      <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
//       <img src="../Avatar/face.png" alt="Avatar" style={{ width: '100%', height: '100%',objectFit: 'cover' }}/>
//     </div>

   
//      <nav>
     
//    <div style={{ marginLeft: '80vw', display: 'flex', alignItems: 'center' }}>
//      <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: '700', marginRight: '10px' }}>Home</NavLink>
//      <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: '700', marginRight: '10px' }}>Logout</NavLink>
//    </div>
            
//      </nav>
//     </div>
//   );
// }

// export default ProfileNav;




import React, { useContext } from "react";
import './Profilenav.css';

import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function ProfileNav() {
  const { currentuser, logout } = useContext(AuthContext);
  console.log("current user is here", currentuser);
  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src="../Avatar/face.png"
          alt="Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <nav>
        <div
          style={{ marginLeft: "80vw", display: "flex", alignItems: "center" }}
        >
          <NavLink
            to="/"
            className="profile-nav-link"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "700",
              marginRight: "10px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => logout()}
            className="profile-nav-link"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "700",
              marginRight: "10px",
            }}
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default ProfileNav;
