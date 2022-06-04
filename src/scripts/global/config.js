const CONFIG = {
  HOSTNAME: 'localhost',
  PORT: process.env.PORT || 3000,
  BASE_URL_COVID: 'https://api.covid19.bnn.go.id/v3/covid-19',
  BASE_URL_VAKSIN: 'https://api.vaksinasi.id',
  CACHE_NAME: 'SiCovid19-V1',
  LOCAL_STORAGE_KEY: 'SiCovid19-V1',
};

module.exports = CONFIG;
