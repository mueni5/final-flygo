// import React, { useState } from 'react';
// import './ReviewForm.css'

// const ReviewsForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     comment: '',
//     rating: ''
//   });
//   const handleFormChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for handling the form submission here
//     console.log(formData);
//     // Reset the form fields
//     setFormData({
//       name: '',
//       comment: '',
//       rating: ''
//     });
//   };
//   return (
//     <div>
//       <h2>Add a Review</h2>
//       <form className="form" onSubmit={handleFormSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Comment:
//           <textarea
//             name="comment"
//             value={formData.comment}
//             onChange={handleFormChange}
//           />
//         </label>
//         <label>
//           Rating:
//           <input
//             type="number"
//             name="rating"
//             min="1"
//             max="5"
//             value={formData.rating}
//             onChange={handleFormChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default ReviewsForm;





import React, { useState, useEffect } from 'react';
import './ReviewForm.css';

const ReviewsForm = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [airport, setAirport] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log("Message:", message);
    console.log("Rating:", rating);
  };
  const handleClick = () => {
    // Perform click logic here
    console.log("Button clicked!");
  };
  useEffect(() => {
    // This code will be executed whenever 'message', 'rating', or 'airport' changes.
    console.log("Message:", message);
    console.log("Rating:", rating);
    console.log("Airport:", airport);
  }, [message, rating, airport]);
  return (
    <div
      style={{
        background: "linear-gradient(to right, rgb(209, 192, 160), rgb(182, 227, 182), rgb(144, 144, 192))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "purple" }}>Add Review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "200%",
              height: "200px",
              resize: "none",
              marginBottom: "10px",
            }}
          ></textarea>
          {/* New input field for airport selection */}
          <label htmlFor="airport">Airport:</label>
          <select
            name="airport"
            value={airport}
            onChange={(e) => setAirport(e.target.value)}>
            <option value="">Select an airport</option>
            <option value="JKIA">Dubai International Airport</option>
            <option value="Eldoret">Moi International Airport</option>
            <option value="Moi">Eldoret International Airport</option>
            <option value="Wilson">Wilson Airport</option>
            <option value="Eldoret">Jomo Kenyatta International Airport</option>
            <option value="Moi">John F. Kennedy International Airport</option>
            <option value="Wilson">Los Angeles International Airport</option>
            <option value="Wilson">Heathrow Airport</option>
          </select>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1" // Added step attribute to allow decimal values
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          /><br />
          <input
            type="submit"
            value="Submit"
            onClick={handleClick}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewsForm;