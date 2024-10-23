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