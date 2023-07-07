import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatings from 'react-star-ratings';

const Testimonial = ({ imageSrc, name, airport, content, rating, socials }) => {
  return (
    <div className="single-item rounded-4">
      <div className="row">
        <div className="col-md-5">
          <div className="profile">
            <div className="image-area">
              <img src={imageSrc} alt="profile" />
            </div>
            <div className="bio">
              <h2>{name}</h2>

            </div>
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="content">
            <p style={{marginLeft: '0px', fontSize: '30px', marginBottom: '20px', marginTop: '60px'}}>
              <span>
                <i className="bi bi-quote"></i>
              </span>
              {content}
            </p>
            <StarRatings
              rating={rating}
              starDimension="20px"
              starSpacing="5px"
              numberOfStars={5}
              starRatedColor='blue'
            />
            <h4 style={{marginTop: '20px'}}>{airport}</h4>
            <p className="socials">
              {socials.map((social, index) => (
                <i key={index} className={`bi bi-${social}`}></i>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};




const Reviews = ({ id }) => {

  const [reviews, setReviews] = useState([]);
  const iconImage = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';

  useEffect(() => {
    fetch('/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch((error) => alert(error.message))
  }, []);


  const testimonials = reviews.map((review) => {
    return {
      imageSrc: iconImage,
      name: review.user_name,
      airport: review.airport_name,
      content: review.review,
      rating: review.rating,
      socials: ['instagram', 'messenger', 'twitter'],
    }
  });

  return (
    <div className="mb-4">
      <section>
        <div id={id} className="container">
          <h1 className="section-header">
            Reviews <span>This is what other customers say</span>
          </h1>
          <div className="testimonials">
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item interval={4000} key={index}>
                  <Testimonial {...testimonial} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;






// const Testimonial = ({ imageSrc, name, airport, content, socials }) => {

//   return (
//     <div className="single-item rounded-4">
//       <div className="row">
//         <div className="col-md-5">
//           <div className="profile">
//             <div className="image-area">
//               <img src={imageSrc} alt="profile" />
//             </div>
//             <div className="bio">
//               <h2>{name}</h2>
//               <h4>{airport}</h4>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="content">
//             <p>
//               <span>
//                 <i className="bi bi-quote"></i>
//               </span>
//               {content}
//             </p>
//             <p className="socials">
//               {socials.map((social, index) => (
//                 <i key={index} className={`bi bi-${social}`}></i>
//               ))}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };