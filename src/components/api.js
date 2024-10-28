import axios from "axios";

const baseCamperUrl = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = "3b543527e4ff4042abba321dafb3cfb3";
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: "en",
    },
  });
  return data;
};

export const fetchByQuery = async (params) => {
  const { data } = await axios.get(baseCamperUrl, {
    params: params
  });
  return data;
};

export async function fetchCamperDetails(camperId) {
  const { data } = await axios.get(baseCamperUrl + `/${camperId}`);
  return data;
}
