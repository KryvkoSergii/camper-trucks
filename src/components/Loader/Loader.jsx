import LoaderPicture from "../../assets/loader.svg";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div>
      <a>Loading...</a>
      <div className={css.bounce}>
        <img src={LoaderPicture} className={css.wheel} />
      </div>
    </div>
  );
}
