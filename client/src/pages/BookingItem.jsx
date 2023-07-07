import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import ProfileNav from "../components/Profilenav";
import Footer from "../components/Footer";

function BookingItem(){
  return(
    <div>
      <ProfileNav/>
      <Header message={"It's time to make a booking."} />
      <Item />
      <Footer />
    </div>
  );
}

export default BookingItem;