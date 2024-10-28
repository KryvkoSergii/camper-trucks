import PropTypes from "prop-types";
import css from "./CamperReviews.module.css";
import GoldenStar from "../../assets/rainitig_star_pressed.svg";
import GrayStar from "../../assets/raiting_star_default.svg";

export default function CamperReviews({ item }) {
  return (
    <ul className={css.review_list}>
      {item.reviews.map((review) => (
        <li key={Math.random(1000)}>{singleReview(review)}</li>
      ))}
    </ul>
  );
}

function singleReview(review) {
  return (
    <>
      <div className={css.review_header}>
        <a className={css.reviewer_label}>
          {getFirstLetter(review.reviewer_name)}
        </a>
        <div className={css.reviewer_sub_label}>
          <a>{review.reviewer_name}</a>
          <ul className={css.raiting}>
            {starMatrix(review.reviewer_rating).map((fillStar) => (
              <li key={review.reviewer_name + "-" + Math.random(1000)}>
                <img src={fillStar} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a className={css.comment}>{review.comment}</a>
    </>
  );
}

function getFirstLetter(value) {
  return value[0].toUpperCase();
}

function starMatrix(raiting) {
  return Array.from({ length: 5 }, (_, index) =>
    index < raiting ? GoldenStar : GrayStar
  );
}

let ReviewItem = PropTypes.shape({
  reviewer_name: PropTypes.string,
  reviewer_rating: PropTypes.number,
  comment: PropTypes.string,
});

let Item = PropTypes.shape({
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(ReviewItem),
});

CamperReviews.propTypes = {
  item: Item,
};
