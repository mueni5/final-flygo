import React, {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

function Header({message}){
  const { currentuser } = useContext(AuthContext);

  return(
    <div style={{ backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
    <div style={{height: '90px'}}>
      <h1 style={{ marginBottom: "10px" }}><b>Welcome </b><span style={{color: 'blue'}}>{currentuser ? currentuser.username : ""}</span></h1>
      <p>We are glad you are here! <span>{message}</span></p>
    </div>
  </div>
  
  );
}

export default Header;
