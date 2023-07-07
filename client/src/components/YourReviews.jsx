// import React, { useState, useEffect, useContext } from 'react';
// import StarRatings from 'react-star-ratings';
// import "./YourReviews.css";
// import { AuthContext } from "../context/AuthContext";

// const YourReviews = () => {
//   const { currentuser } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setReviews([]); // Reset reviews state when the user changes
//     setIsLoading(true); // Set isLoading state to true when the user changes

//     if (currentuser && currentuser.id) {
//       fetch(`/user_reviews?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setReviews(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     } else {
//       setIsLoading(false); // If currentuser is undefined or doesn't have an id, set isLoading to false
//     }
//   }, [currentuser]);


//   const handleDelete = (reviewId) => {
//      fetch(`/reviews/${reviewId}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         alert("Review deleted successfully!");
//       }).catch(error => console.log(error.message));
//   };


//   const handleEdit = (reviewId) => {
//     // Edit logic here
//     console.log(`Edit review with id: ${reviewId}`);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className='header-card-container'>
//         <h2>Flight Reviews</h2>
//       </div>
//       <div className="card-container">
//         {reviews.map(review => (
//           <ReviewCard
//             key={review.id}
//             review={review}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// const ReviewCard = ({ review, onDelete, onEdit }) => {
//   return (
//     <div className="card">
//       <h3>{review.review}</h3>
//       <p>{review.rating}</p>
//       <p>{review.airport_name}</p>
//       <StarRatings
//         rating={parseFloat(review.rating)}
//         starDimension="20px"
//         starSpacing="2px"
//         starRatedColor="gold"
//       />
//       <div className="button-container">
//         <button onClick={() => onEdit(review.id)}>Edit</button>
//         <button onClick={() => onDelete(review.id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default YourReviews;






// import React, { useState, useEffect, useContext } from 'react';
// import StarRatings from 'react-star-ratings';
// import "./YourReviews.css";
// import { AuthContext } from "../context/AuthContext";
// import ReviewsForm from './ReviewsForm';  // Imported the ReviewsForm component
// import Spinner from './Spinner';

// const YourReviews = () => {
//   const { currentuser } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [editReview, setEditReview] = useState(null);

//   useEffect(() => {
//     setReviews([]); 
//     setIsLoading(true); 

//     if (currentuser && currentuser.id) {
//       fetch(`/user_reviews?user_id=${currentuser.id}`)
//         .then(response => response.json())
//         .then(data => {
//           setReviews(data);
//           setIsLoading(false);
//         })
//         .catch(error => alert(error.message));
//     } else {
//       setIsLoading(false);
//     }
//   }, [currentuser]);

//   const handleDelete = (reviewId) => {
//      fetch(`/reviews/${reviewId}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert("Review deleted successfully!");
//       }).catch(error => console.log(error.message));
//   };

//   const handleEdit = (reviewId) => {
//     const reviewToEdit = reviews.find(review => review.id === reviewId);
//     setEditReview(reviewToEdit);
//   };

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <>
//       <div className='header-card-container'>
//         <h2>Flight Reviews</h2>
//       </div>
//       <div className="card-container">
//         {reviews.map(review => (
//           <ReviewCard
//             key={review.id}
//             review={review}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         ))}
//       </div>
//       <ReviewsForm editReview={editReview} onReviewUpdated={setEditReview} />
//     </>
//   );
// };

// const ReviewCard = ({ review, onDelete, onEdit }) => {
//   return (
//     <div className="card">
//       <h3>{review.review}</h3>
//       <p>{review.rating}</p>
//       <p>{review.airport_name}</p>
//       <StarRatings
//         rating={parseFloat(review.rating)}
//         starDimension="20px"
//         starSpacing="2px"
//         starRatedColor="gold"
//       />
//       <div className="button-container">
//         <button onClick={() => onEdit(review.id)}>Edit</button>
//         <button onClick={() => onDelete(review.id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default YourReviews;




import React, { useState, useEffect, useContext } from 'react';
import StarRatings from 'react-star-ratings';
import "./YourReviews.css";
import { AuthContext } from "../context/AuthContext";
import ReviewsForm from './ReviewsForm';
import Spinner from './Spinner';

const YourReviews = () => {
  const { currentuser } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editReview, setEditReview] = useState(null);

  useEffect(() => {
    setReviews([]); 
    setIsLoading(true); 

    if (currentuser && currentuser.id) {
      fetch(`/user_reviews?user_id=${currentuser.id}`)
        .then(response => response.json())
        .then(data => {
          setReviews(data);
          setIsLoading(false);
        })
        .catch(error => alert(error.message));
    } else {
      setIsLoading(false);
    }
  }, [currentuser]);

  const handleDelete = (reviewId) => {
     fetch(`/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        alert("Review deleted successfully!");
      }).catch(error => console.log(error.message));
  };

  const handleEdit = (reviewId) => {
    const reviewToEdit = reviews.find(review => review.id === reviewId);
    setEditReview(reviewToEdit);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='header-card-container'>
        <h2>Flight Reviews</h2>
      </div>
      <div className="card-container">
        {reviews.length === 0 ? (
          <div className="no-reviews-message">No current reviews</div>
        ) : (
          reviews.map(review => (
            <ReviewCard
              key={review.id}
              review={review}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
      <ReviewsForm editReview={editReview} onReviewUpdated={setEditReview} />
    </>
  );
};

const ReviewCard = ({ review, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{review.review}</h3>
      <p>{review.rating}</p>
      <p>{review.airport_name}</p>
      <StarRatings
        rating={parseFloat(review.rating)}
        starDimension="20px"
        starSpacing="2px"
        starRatedColor="gold"
      />
      <div className="button-container">
        <button onClick={() => onEdit(review.id)}>Edit</button>
        <button onClick={() => onDelete(review.id)}>Delete</button>
      </div>
    </div>
  );
};

export default YourReviews;






















// import React, { useState, useEffect } from 'react';
// import StarRatings from 'react-star-ratings';
// import "./YourReviews.css";

// const reviewsData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     comment: 'Great product! Highly recommended.',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     comment: 'Average quality. Could be better.',
//     rating: 3
//   },
//   {
//     id: 3,
//     name: 'Mark Johnson',
//     comment: 'Terrible experience. Do not buy!',
//     rating: 1
//   }
// ];

// const ReviewCard = ({ review, onDelete, onEdit }) => {
//   return (
//     <div className="card">
//       <h3>{review.name}</h3>
//       <p>{review.comment}</p>
//       <StarRatings
//           rating={parseFloat(review.rating)}
//           starDimension="20px"
//           starSpacing="2px"
//           starRatedColor="gold"
//       />
//       <div className="button-container">
//         <button onClick={() => onEdit(review.id)}>Edit</button>
//         <button onClick={() => onDelete(review.id)}>Delete</button>
//       </div>
//     </div>
//   );
// };




// const YourReviews = () => {
//   const [reviews, setReviews] = useState(reviewsData);
  
//   const handleDelete = (reviewId) => {
//     // Delete logic here
//     console.log(`Delete review with id: ${reviewId}`);
//   };
//   const handleEdit = (reviewId) => {
//     // Edit logic here
//     console.log(`Edit review with id: ${reviewId}`);
//   };
//   return (
//     <>
//       <div className='header-card-container'>
//         <h2>Flight Reviews</h2>
//       </div>
//       <div className="card-container">
//         {reviewsData.map(review => (
//           <ReviewCard
//             key={review.id}
//             review={review}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
// export default YourReviews;


