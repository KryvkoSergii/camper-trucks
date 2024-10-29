import { Outlet, useParams } from "react-router-dom";
import { fetchCamperDetails } from "../../components/api";
import { useState, useEffect, useId } from "react";
import css from "./DetailsPage.module.css";
import CamperRaiting from "../../components/CamperRaiting/CamperRaiting";
import CamperLocation from "../../components/CamperLocation/CamperLocation";
import CamperPrice from "../../components/CamperPrice/CamperPrice";
import Underline from "../../assets/underline.svg";
import CamperDetailFeatures from "../../components/CamperDetailFeatures/CamperDetailFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import ModalImage from "react-modal-image";

import initState from "../../initState.json";
import CamperBooking from "../../components/CamperBooking/CamperBooking";

export default function CamperPage() {
  const [camperDetails, setCamperDetails] = useState(() => initState);
  const { id } = useParams();

  const reviewsId = useId();
  const featuresId = useId();
  const [reviewSelected, setReviewSelected] = useState(false);
  const [featureSelected, setFeatureSelected] = useState(true);

  useEffect(() => {
    async function resolveMovieDetails(camperId) {
      const response = await fetchCamperDetails(camperId);
      setCamperDetails(response);
    }

    resolveMovieDetails(id);
  }, [id]);

  const onChange = (event) => {
    if (event.target.value === "features") {
      setFeatureSelected(true);
      setReviewSelected(false);
    } else {
      setFeatureSelected(false);
      setReviewSelected(true);
    }
  };

  return (
    <div className={css.camper_details}>
      <div>
        <a className={css.camper_name}>{camperDetails.name}</a>
        <div className={css.raiting_details}>
          <CamperRaiting
            raiting={camperDetails.rating}
            reviewsCount={camperDetails.reviews.length}
          />
          <CamperLocation location={camperDetails.location} />
        </div>
        <CamperPrice price={camperDetails.price} />
      </div>

      <ul className={css.camper_gallary}>
        {camperDetails.gallery
          .map((pic) => pic["original"])
          .map((src) => (
            <li key={extractImgId(src)}>
              <ModalImage small={src} large={src} alt={camperDetails.name} className={css.camper_gallary_img}/>
            </li>
          ))}
      </ul>
      <a className={css.camper_description}>{camperDetails.description}</a>

      <div>
        <fieldset className={css.navigation}>
          <div>
            <input
              type="radio"
              id={featuresId}
              name="page"
              value="features"
              onChange={onChange}
              className={css.button_box}
            />
            <label htmlFor={featuresId} className={css.navigation_label}>
              <span>Features</span>
              <img src={Underline} hidden={!featureSelected} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              id={reviewsId}
              name="page"
              value="reviews"
              onChange={onChange}
              className={css.button_box}
            />
            <label htmlFor={reviewsId} className={css.navigation_label}>
              <span>Reviews</span>
              <img src={Underline} hidden={!reviewSelected} />
            </label>
          </div>
        </fieldset>
        <div className={css.responsive_line}></div>
      </div>

      <div className={css.camper_details_footer}>
        <div className={css.camper_details_footer_cell}>
          {featureSelected && <CamperDetailFeatures item={camperDetails} />}
          {reviewSelected && <CamperReviews item={camperDetails} />}
          <Outlet />
        </div>
        <div className={css.camper_details_footer_cell}>
          <CamperBooking />
        </div>
      </div>
    </div>
  );
}

function extractImgId(src) {
  return src.split("/").slice(-1)[0];
}
