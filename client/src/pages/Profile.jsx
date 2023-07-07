import React from "react";
import CurrentBookings from "../components/CurrentBookings";
// import ReviewsForm from "../components/ReviewsForm";
import YourReviews from "../components/YourReviews";
import ProfileNav from "../components/Profilenav";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile(){
  return(
    <div className="profile-container">
      <ProfileNav/>
      <Header message={"This is your cabin."} />
      <CurrentBookings />
      <YourReviews />
      <Footer />
      {/* <ReviewsForm /> */}
    </div>
  );
}

export default Profile;