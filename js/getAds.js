import { ADS_BASE_URL } from "./api.js";

export const getAds = async () => {
  const response = await fetch(
    `${ADS_BASE_URL}/ad/match/?placement=bonus`, {
    method: 'POST',
  });
  return await response.json();
};