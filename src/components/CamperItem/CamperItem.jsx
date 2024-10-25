import CamperLocation from "../CamperLocation/CamperLocation";
import CamperRaiting from "../CamperRaiting/CamperRaiting";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import ActionButton from "../ActionButton/ActionButton";
import PropTypes from "prop-types";
import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CamperItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className={css.camper_item}>
      <div className={css.photo_container}>
        <img
          className={css.camper_photo}
          src={item.gallery[0].original}
          alt={item.name}
        />
      </div>
      <div className={css.details_container}>
        <a className={css.camper_name}>{item.name}</a>
        <CamperRaiting
          raiting={item.rating}
          reviewsCount={item.reviews.length}
        />
        <CamperLocation location={item.location} />
        <a>{item.description}</a>
        <a className={css.price}>€{item.price.toFixed(2)}</a>
        <CamperFeatures item={item} />
        <ActionButton
          label="Show more"
          onClick={() => navigate(`/catalog/${item.id}`)}
        />
      </div>
    </div>
  );
}

let GalleryItem = PropTypes.shape({
  thumb: PropTypes.string,
  original: PropTypes.string,
});

let Item = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  AC: PropTypes.bool,
  bathroom: PropTypes.bool,
  kitchen: PropTypes.bool,
  TV: PropTypes.bool,
  radio: PropTypes.bool,
  refrigerator: PropTypes.bool,
  microwave: PropTypes.bool,
  gas: PropTypes.bool,
  water: PropTypes.bool,
  reviews: PropTypes.arrayOf(PropTypes.object),
  gallery: PropTypes.arrayOf(GalleryItem),
});

CamperItem.propTypes = {
  item: Item,
};
