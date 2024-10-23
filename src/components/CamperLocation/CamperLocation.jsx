import css from "./LocationBar.module.css"

export default function CamperLocation(){
    return (
    <div className={css.location_bar}>
    <input type="text" value={`${location.city}, ${location.country}`}/>
    <img src={Map}/>
  </div>);
}