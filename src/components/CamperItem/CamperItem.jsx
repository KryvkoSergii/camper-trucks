import CamperLocation from "../CamperLocation/CamperLocation";
import CamperRaiting from "../CamperRaiting/CamperRaiting";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import ActionButton from "../ActionButton/ActionButton";
import PropTypes from "prop-types";
import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";
import CamperPrice from "../CamperPrice/CamperPrice";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
        <div>
          <div className={css.details_container_header}>
            <a className={css.camper_name}>{item.name}</a>
            <div className={css.details_container_header_price}>
              <CamperPrice price={item.price} />
              <FavoriteButton id={item.id} />
            </div>
          </div>
          <div className={css.details_container_raiting}>
            <CamperRaiting
              raiting={item.rating}
              reviewsCount={item.reviews.length}
            />
            <CamperLocation location={item.location} />
          </div>
        </div>
        <a>{cropText(item.description)}</a>
        <CamperFeatures item={item} />
        <ActionButton
          label="Show more"
          onClick={() => navigate(`/catalog/${item.id}`)}
        />
      </div>
    </div>
  );
}

function cropText(value) {
  return value && value.length > 60 ? value.substring(0, 60) + "..." : value;
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
