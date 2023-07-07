// import React from "react";
// import Header from "../components/Header";
// import List from "../components/List";
// import ProfileNav from "../components/Profilenav";
// import Footer from "../components/Footer";


// function BookingList(){
//   return(
//     <div>
//       <ProfileNav/>
//       <Header />
//       <List />
//       <Footer />
//     </div>
//   );
// }


// export default BookingList;



import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import ProfileNav from "../components/Profilenav";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function BookingList() {
  const location = useLocation();
  const flights = location.state.flights;

  return (
    <div>
      <ProfileNav />
      <Header message={"Check out the available flights here"}/>
      <List flights={flights} />
      <Footer />
    </div>
  );
}

export default BookingList;
