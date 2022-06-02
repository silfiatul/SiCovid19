import { BASE_URL_COVID, BASE_URL_VAKSIN } from './config';

const API_ENDPOINT = {
  KASUS_HARIAN: `${BASE_URL_COVID}/update.json`,
  KASUS_HARIAN_PROV: `${BASE_URL_COVID}/prov.json`,
  RISK_PROV: `${BASE_URL_COVID}/skor.json`,
  REGIONS: `${BASE_URL_VAKSIN}/regions`,
  LOCATION: (province, city) => `${BASE_URL_VAKSIN}/${province}?=${city}`,
};

export default API_ENDPOINT;
