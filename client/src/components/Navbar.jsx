// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from 'react-router-hash-link';
import "./Navbar.css";
import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   return (
//     <div className="bg-warning navbar">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
//         <div className="container-fluid bg-warning ">
//           <NavLink className="navbar-brand ms-3" to="#">
//             Fly<span className="text-info">GO</span>
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo02"
//             aria-controls="navbarTogglerDemo02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link active mx-2 text-dark mystyle"
//                   aria-current="page"
//                   to="#home"
//                   style = {{}}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active mx-2 text-dark mystyle" to="#about">
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link active mx-2 text-dark mystyle"
//                   to="#schedule"
//                 >
//                   Schedule
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link active mx-2 text-dark mystyle"
//                   to="#reviews"
//                 >
//                   Reviews
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active mx-2 mystyle" to="/login">
//                   <i class="bi bi-person-circle"></i>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




  

const Navbar = () => {
  const {currentuser} = useContext(AuthContext);
  let profileRoute = '/profile'

  if(currentuser && !currentuser.username){
    profileRoute = '/login'
    console.log("success");
  }else{
    profileRoute = '/profile'
  }


  return (
    <div className="bg-warning">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3 fixed-top">
        <div className="container-fluid bg-warning">
          <NavLink className="navbar-brand ms-3" to="#">
            Fly<span className="text-info">GO</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-dark mystyle"
                  aria-current="page"
                  to="#home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active mx-2 text-dark mystyle" to="#about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-dark mystyle"
                  to="#schedule"
                >
                  Schedule
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active mx-2 text-dark mystyle"
                  to="#reviews"
                >
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active mx-2 mystyle" to={profileRoute}>
                  <i class="bi bi-person-circle"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
