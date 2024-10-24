import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";

export default function CamperList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(""));
  }, []);
  return <div></div>;
}
