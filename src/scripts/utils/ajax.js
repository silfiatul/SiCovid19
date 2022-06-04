const $ = require('jquery');
const API_ENDPOINT = require('../global/apiEndpoint');
const {
  createTemplateOption,
  createTemplateCardVaksinasi,
  createTemplateLoader,
} = require('../views/templates/template.js');

/* *Data from API https://api.vaksinasi.id */

let result = [];

/* *Provinsi */
$(() => {
  /* *Provinsi */
  const settingsVaksinasi = {
    url: `${API_ENDPOINT.REGIONS}`,
    method: 'GET',
    timeout: 0,
    cache: true,
  };
  $.ajax(settingsVaksinasi).done((response) => {
    result = response.data;
    const options = createTemplateOption('provinsi', response.data);
    $("[data-wilayah='provinsi']").replaceWith(options);
  });
});

/* *Kota */
$(() => {
  const provinsiElement = $('#filterProvinsi');

  provinsiElement.on('change', (e) => {
    const provinsi = e.target.value;

    result.forEach((province) => {
      if (province.province === provinsi) {
        const options = createTemplateOption('kota', province.city);
        $("[data-wilayah='kota']").replaceWith(options);
      }
    });
  });
});

/* *Button */
$(() => {
  const btnTemukan = $('.btn-temukan');

  btnTemukan.on('click', async (e) => {
    e.preventDefault();

    const provinsi = $('#filterProvinsi').val();
    const kota = $('#filterKota').val();

    if (provinsi === '' || kota === '') {
      alert('Pilih Provinsi dan Kota');
    } else {
      try {
        $('.vaksinasi-item').remove();
        $('.list-vaksinasi').append(createTemplateLoader());

        const data = await fetch(`${API_ENDPOINT.LOCATION(provinsi, kota)}`);
        const response = await data.json();
        const responseJson = response.data;

        const cardItem = createTemplateCardVaksinasi(responseJson);
        $('.loader').remove();
        $('.list-vaksinasi').append(cardItem);
      } catch (error) {
        alert('Terjadi kesalahan : Network Error');
      }
    }
  });
});
