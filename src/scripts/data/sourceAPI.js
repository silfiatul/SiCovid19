import API_ENDPOINT from '../global/apiEndpoint';

const Covid19API = {
  async kasusHarian() {
    const response = await fetch(API_ENDPOINT.KASUS_HARIAN);
    const responseJson = await response.json();
    return responseJson;
  },
  async kasusHarianProv() {
    const response = await fetch(API_ENDPOINT.KASUS_HARIAN_PROV);
    const responseJson = await response.json();
    return responseJson;
  },
  async riskProv() {
    const response = await fetch(API_ENDPOINT.RISK_PROV);
    const responseJson = await response.json();
    return responseJson;
  },
};

const VaksinasiAPI = {
  async regions() {
    const response = await fetch(API_ENDPOINT.REGIONS);
    const responseJson = await response.json();
    return responseJson;
  },
  async location() {
    const response = await fetch(API_ENDPOINT.LOCATION);
    const responseJson = await response.json();
    return responseJson;
  },
};

export { Covid19API, VaksinasiAPI };
