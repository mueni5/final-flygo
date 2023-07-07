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





// import React, { useState, useEffect, useContext} from 'react';
// import './ReviewForm.css';
// import { AuthContext } from '../context/AuthContext';

// const ReviewsForm = () => {
//   const [message, setMessage] = useState("");
//   const [rating, setRating] = useState(0);
//   const [airport, setAirport] = useState("");
//   const { currentuser } = useContext(AuthContext)


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform submit logic here
//     console.log("Message:", message);
//     console.log("Rating:", rating);
//   };
//   const handleClick = () => {
//     // Perform click logic here
//     console.log("Button clicked!");
//   };
//   useEffect(() => {
//     // This code will be executed whenever 'message', 'rating', or 'airport' changes.
//     console.log("Message:", message);
//     console.log("Rating:", rating);
//     console.log("Airport:", airport);
//   }, [message, rating, airport]);
//   return (
//     <div
//       style={{
//         background: "linear-gradient(to right, rgb(209, 192, 160), rgb(182, 227, 182), rgb(144, 144, 192))",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "50vh",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <h2 style={{ textAlign: "center", color: "purple" }}>Add Review</h2>
//         <form onSubmit={handleSubmit}>
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             style={{
//               width: "200%",
//               height: "200px",
//               resize: "none",
//               marginBottom: "10px",
//             }}
//           ></textarea>
//           {/* New input field for airport selection */}
//           <label htmlFor="airport">Airport:</label>
//           <select
//             name="airport"
//             value={airport}
//             onChange={(e) => setAirport(e.target.value)}>
//             <option value="">Select an airport</option>
//             <option value="JKIA">Dubai International Airport</option>
//             <option value="Eldoret">Moi International Airport</option>
//             <option value="Moi">Eldoret International Airport</option>
//             <option value="Wilson">Wilson Airport</option>
//             <option value="Eldoret">Jomo Kenyatta International Airport</option>
//             <option value="Moi">John F. Kennedy International Airport</option>
//             <option value="Wilson">Los Angeles International Airport</option>
//             <option value="Wilson">Heathrow Airport</option>
//           </select>
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             min="1"
//             max="5"
//             step="0.1" // Added step attribute to allow decimal values
//             value={rating}
//             onChange={(e) => setRating(parseFloat(e.target.value))}
//           /><br />
//           <input
//             type="submit"
//             value="Submit"
//             onClick={handleClick}
//             style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReviewsForm;






// import React, { useState, useContext } from 'react';
// // import { useEffect } from 'react';
// import './ReviewForm.css';
// import { AuthContext } from '../context/AuthContext';

// const ReviewsForm = () => {
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(0);
//   const [airport_name, setAirport] = useState("");
//   const { currentuser } = useContext(AuthContext)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Assuming your backend is expecting data in this format
//     const reviewObject = {
//       review: review,
//       rating: rating,
//       user_id: currentuser.id, // Assuming currentuser object has an id property
//       airport_name: airport_name, // Assuming airport id can be selected
//     };

//     // Send the data via POST request to the /reviews endpoint
//     fetch('/reviews', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(reviewObject),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Clear the form
//         setReview("");
//         setRating(0);
//         setAirport("");
//         console.log("This is the logged data", data);
//         // Notify the user that the review was successfully submitted
//         alert("Review submitted successfully!");
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };


//   return (
//     <div
//       style={{
//         background: "lightblue",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "60vh",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#f5f5f5",
//           padding: "30px",
//           borderRadius: "10px",
//           boxShadow: "0 2px 4px rgba(0, 0.6, 0.4, 0.2)",
//         }}
//       >
//         <h2 style={{ textAlign: "center", color: "purple" }}>Add Review</h2>
//         <form onSubmit={handleSubmit}>
//           <textarea
//             name="message"
//             placeholder="Enter your message"
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             style={{
//               width: "200%",
//               height: "200px",
//               resize: "none",
//               marginBottom: "10px",
//             }}
//           ></textarea>
//           {/* New input field for airport selection */}
//           <label htmlFor="airport">Airport:</label>
//           <select
//             name="airport"
//             value={airport_name}
//             onChange={(e) => setAirport(e.target.value)}>
//             <option value="">Select an airport</option>
//             <option value="Dubai International Airport">Dubai International Airport</option>
//             <option value="Moi International Airport">Moi International Airport</option>
//             <option value="Eldoret International Airport">Eldoret International Airport</option>
//             <option value="Wilson Airport">Wilson Airport</option>
//             <option value="Jomo Kenyatta International Airport">Jomo Kenyatta International Airport</option>
//             <option value="John F. Kennedy International Airport">John F. Kennedy International Airport</option>
//             <option value="Los Angeles Interantional Airport">Los Angeles International Airport</option>
//             <option value="Heathrow Airport">Heathrow Airport</option>
//           </select>
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             name="rating"
//             min="1"
//             max="5"
//             step="0.1" // Added step attribute to allow decimal values
//             value={rating}
//             onChange={(e) => setRating(parseFloat(e.target.value))}
//           /><br />
//           <input
//             type="submit"
//             value="Submit"
//             style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReviewsForm;



// useEffect(() => {
  //   // This code will be executed whenever 'message', 'rating', or 'airport' changes.
  //   console.log("Message:", review);
  //   console.log("Rating:", rating);
  //   console.log("Airport:", airport_name);
  // }, [review, rating, airport_name]);



import React, { useState, useEffect, useContext } from 'react';
import './ReviewForm.css';
import { AuthContext } from '../context/AuthContext';

const ReviewsForm = ({ editReview, onReviewUpdated }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [airport_name, setAirport] = useState("");
  const { currentuser } = useContext(AuthContext)

  useEffect(() => {
    if (editReview) {
      setReviewText(editReview.review);
      setRating(editReview.rating);
      setAirport(editReview.airport_name);
    } else {
      setReviewText("");
      setRating(0);
      setAirport("");
    }
  }, [editReview]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewObject = {
      review: reviewText,
      rating: rating,
      user_id: currentuser.id,
      airport_name: airport_name,
    };

    const endpoint = editReview ? `/reviews/${editReview.id}` : '/reviews';
    const method = editReview ? 'PUT' : 'POST';

    fetch(endpoint, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewObject),
    })
      .then(response => response.json())
      .then(data => {
        setReviewText("");
        setRating(0);
        setAirport("");
        onReviewUpdated(null);  // Reset the editReview state in the parent component
        alert(editReview ? "Review updated successfully!" : "Review submitted successfully!");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      style={{
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0.6, 0.4, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "purple" }}>{editReview ? "Edit Review" : "Add Review"}</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            style={{
              width: "200%",
              height: "200px",
              resize: "none",
              marginBottom: "10px",
            }}
          ></textarea>
          <label htmlFor="airport">Airport:</label>
          <select
            name="airport"
            value={airport_name}
            onChange={(e) => setAirport(e.target.value)}>
            <option value="">Select an airport</option>
            <option value="Dubai International Airport">Dubai International Airport</option>
            <option value="Moi International Airport">Moi International Airport</option>
            <option value="Eldoret International Airport">Eldoret International Airport</option>
            <option value="Wilson Airport">Wilson Airport</option>
            <option value="Jomo Kenyatta International Airport">Jomo Kenyatta International Airport</option>
            <option value="John F. Kennedy International Airport">John F. Kennedy International Airport</option>
            <option value="Los Angeles Interantional Airport">Los Angeles International Airport</option>
            <option value="Heathrow Airport">Heathrow Airport</option>
          </select>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          /><br />
          <input
            type="submit"
            value={editReview ? "Update Review" : "Submit"}
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
