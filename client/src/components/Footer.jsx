import React from 'react';


function Footer() {
  const footerStyle = {
    backgroundColor: "teal",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    color: 'white'
  };
  
  const columnStyle = {
    flexBasis: "60%",
  };
  return (
    <footer style={footerStyle}>
    <div style={columnStyle}>
      <h3>Contact Us</h3>
      <ul><i class="bi bi-twitter"> Twitter</i> </ul>
      <ul><i class="bi bi-facebook"> Facebook</i></ul> 
      <ul><i class="bi bi-instagram"> Instagram</i></ul>
    </div>

    <div style={columnStyle}>
      <h3>Services</h3>
      <ul>Bookings</ul>
      <ul>Reviews</ul>
    </div>

    <div style={columnStyle}>
      <h3>Customer Support</h3>
      <ul> <i class="bi bi-telephone-inbound-fill">  +254712345678</i></ul>
      <ul><i class="bi bi-envelope"> Email Us: info@flygo.com</i></ul> 

    </div>
  </footer>
  )
}

export default Footer;
