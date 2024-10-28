import ActionButton from "../../components/ActionButton/ActionButton";
import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/catalog");
  };
  
  return (
    <div className={css.content}>
      <div className={css.advertisement}>
        <a className={css.advertisement_1}>Campers of your dreams</a>
        <a className={css.advertisement_2}>
          You can find everything you want in our catalog
        </a>
        <ActionButton label="View Now" onClick={onClick} width="173px" />
      </div>
    </div>
  );
}
