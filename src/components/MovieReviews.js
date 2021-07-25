// Code MovieReviews Here
import React from 'react'

function MovieReviews({reviews}) {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review.headline} className="review">
          
          <header>
            
            <a className="review-link" href={review.link.url}>
              {review.headline}
              
            </a>
            <br />
            <span className="author">{review.byline}</span>
            
          </header>
          <blockquote>{review.summary_short}</blockquote>
          
        </div>
      ))}
    </div>
  );
}

// const Review = ({ headline, byline, link, summary_short }) => {
//   return (
//     <div key={headline} className="review">
//       <header>
//         <a className="review-link" href={link.url}>
//           {headline}
//         </a>
//         <br />
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{summary_short}</blockquote>
//     </div>
//   );
// };

// const MovieReviews = ({ reviews }) => (
//   <div className="review-list">{reviews.map(Review)}</div>
// );

export default MovieReviews

