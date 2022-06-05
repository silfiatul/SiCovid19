let result = [];

/* *Kasus harian */
$(async () => {
  try {
    const harian = await fetch(`${API_ENDPOINT.KASUS_HARIAN}`);
    const harianData = await harian.json();

    $("[data-covid='kasus']").append(harianData.cases);
    $("[data-covid='kematian']").append(harianData.deaths);
    $("[data-covid='sembuh']").append(harianData.recovered);
  } catch (error) {}
});

$(async () => {
  try {
    const loader = createTemplateLoader();
    $('.list-vaksinasi').append(loader);

    const data = await fetch(
      `${API_ENDPOINT.LOCATION('Sumatera Utara', 'Kota Medan')}`
    );

    const response = await data.json();
    const responseJson = response.data;

    const cardItem = createTemplateCardVaksinasi(responseJson);
    $('.loader').remove();
    $('.list-vaksinasi').append(cardItem);
  } catch (error) {
    alert('Terjadi kesalahan : Network Error');
    $('.loader').remove();
  }
});

/**
 * Cari data berdasarkan wilayah
 **/

/* *Provinsi */
$(async () => {
  try {
    const provinsi = await fetch(`${API_ENDPOINT.REGIONS}`);
    const provinsiJson = await provinsi.json();
    const provinsiData = provinsiJson.data;

    result = provinsiData;

    const options = createTemplateOption('provinsi', provinsiData);
    $("[data-wilayah='provinsi']").replaceWith(options);
  } catch (error) {
    alert(error);
  }
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

    if (
      provinsi.toLowerCase() === 'provinsi' ||
      kota.toLocaleLowerCase() === 'kabupaten/kota'
    ) {
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