import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = '3b543527e4ff4042abba321dafb3cfb3';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  return data;
};

export const fetchAllCampers = async () => {
  const urlPosition = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";
  const { data } = await axios.get(urlPosition);
  return data;
};