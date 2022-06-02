const Home = {
  async render() {
    return `
      <section id="home" class="mb-5">
        <div class="jumbotron text-center text-sm-left bg-transparent row wrapper">
          <div class="col-md left-column">
            <p class="lead d-inline-block content-title">
              <img src="./assets/icons/virus-lab-research-magnifier-2.svg" alt="" srcset="">
              <span>Waspada Covid</span>
            </p>
            <h1>Aku, Kamu, Kita Semua </br><span class="two">Bisa Kalahkan</span></br> <span class="three">Covid-19</span></h1>
            <a class="btn btn-primary btn-lg rounded-pill btn-tentang" href="#" role="button">Tentang</a>  
          </div>
          <div class="col-md right-column p-0">
            <img src="./assets/images/hero_image.png" alt="Hero Image" class="w-100">
          </div>
        </div>
        <div class="data-wrapper">
          <div class="data-covid row text-center">
            <div class="col-12 col-md-4 col-sm-6">
              <div class="data-title">
                <p class="m-0">Kasus Harian</p>
              </div>
              <div class="count-data">
                <p data-covid="harian"></p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-sm-6">
              <div class="data-title">
                <p class="m-0">Kasus Harian Provinsi</p>
              </div>
              <div class="count-data">
                <p data-covid="harianProv"></p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-sm-12">
              <div class="data-title">
                <p class="m-0">Resiko Covid Provinsi</p>
              </div>
              <div class="count-data">
                <p data-covid="riskProv"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="protokol" class="mb-5">
        <div class="wrapper text-center row">
            <div class="section-header col-12 mb-5">
              <p class="lead d-inline-block content-title">
                <img src="./assets/icons/vaccine-protection-shield.svg" alt="" srcset="">
                <span>Protokol</span>
              </p>
              <h2 class="section-header-text">Patuhi Protokol Kesehatan Agar Terhindar Dari Covid-19</h2>
            </div>
            <div class="section-content col-12">
              <div class="row">
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/maskman.png" alt="Orang menggunakan masker" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Memakai Masker</h3>
                      <p class="text-left">Selalu menggunakan masker ketika ingin berpergian keluar rumah</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/washinghand.png" alt="orang mencuci tangan" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Mencuci Tangan</h3>
                      <p class="text-left">Sesering mungkin mencuci tangan atau memakai handsanitizer</p>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/market.png" alt="pasar swalayan" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Hindari Swalayan</h3>
                      <p class="text-left">Hindari swalayan dan tempat-tempat pemicu penyebab kerumunan</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/coughing.jpg" alt="Orang batuk menutup mulut" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Menutup Mulut Bila Batuk</h3>
                      <p class="text-left">Tutuplah mulut Anda bila hendak bersin ataupun batuk</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section id="vaksinasi" class="mb-5">
      <div class="wrapper text-center row">
          <div class="section-header col-12 mb-3">
              <p class="lead d-inline-block content-title">
                  <img src="./assets/icons/Date_range_duotone_line.svg" alt="" srcset="">
                  <span>Vaksinasi</span>
              </p>
              <h2 class="section-header-text">Ayo Vaksinasi!</h2>
          </div>
          <div class="filter-tools col-12">
              <form method="get" class="form-inline justify-content-center">
                  <select class="form-control custom-select mr-sm-2 mb-2 mb-lg-0 text-center" id="filterProvinsi">
                      <option selected>Provinsi</option>
                      <option value="0" name="0">Sumatera Utara</option>
                  </select>
                  <select class="form-control custom-select mr-sm-2 mb-2 mb-lg-0 text-center" id="filterKota">
                      <option selected>Kabupaten/Kota</option>
                      <option value="0" name="0">...</option>
                  </select>
                  <button type="submit" class="btn btn-primary btn-temukan">Temukan</button>
              </form>
          </div>
          <div class="vaksinasi-wrapper col-12 mt-5">
              <h5 class="text-center mb-3">Daftar Vaksinasi</h5>
              <div class="list-vaksinasi">

                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
                  <div class="vaksinasi-item text-left">
                      <div class="card p-3">
                        <div class="card-body">
                          <h5 class="card-title">Sumatera - Binjai</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Puskesmas Kebun lada</h6>
                          <div class="card-text mb-2">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item p-0">Alamat : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">Jln. Talam No. 28</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Hari Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">2021/07/31 - 2021/03/31</li>
                                </ul>
                              </li>
                              <li class="list-group-item p-0">Waktu Operasional : 
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item pt-0">08:00:00 - 12:00:00</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <p class="mb-0">Pendaftaran : Walk-in</p>
                          <p class="ml-auto text-danger">Gratis</p>
                        </div>
                        <button type="button" class="btn btn-secondary btn-selengkapnya" data-toggle="modal" data-target="#selengkapnya">Selengkapnya</button>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="selengkapnya" tabindex="-1" aria-labelledby="selengkapnyaLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="selengkapnyaLabel">Vaksinasi</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Provinsi</p></div>
                <div class="col-md-12"><h5>Sumatera Utara</h5></div>
              </div>
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Kota</p></div>
                <div class="col-md-12"><h5>Binjai</h5></div>
              </div>
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Lokasi</p></div>
                <div class="col-md-12"><h5>Puskesmas XYZ</h5></div>
                <div class="col-md-12"><h5>Jl. Turiam No.40 kel.Pahlawan kec.Binjai Utara</h5></div>
                <div class="col-md-12"><a href="https://goo.gl/maps/XSi7bZCrDTFaMAme8">Open Google Map</a></div>
              </div>
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Hari Operasional</p></div>
                <div class="col-md-12"><h5>2021/07/31 - 2021/03/31</h5></div>
              </div>
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Usia</p></div>
                <div class="col-md-12"><h5>Dewasa (18-59 Tahun)</h5></div>
                <div class="col-md-12"><h5>Lansia (60- )</h5></div>
              </div>
              <div class="row mb-1">
                <div class="col-md-12"><p class="small m-0">Deskripsi</p></div>
                <div class="col-md-12"><h5>Dosis 1&2/Memiliki KTP atau surat domisili kelurahan tanah kalikedinding</h5></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const KasusHarian = document.querySelector("[data-covid='harian']");
    const KasusHarianProv = document.querySelector("[data-covid='harianProv']");
    const riskProv = document.querySelector("[data-covid='riskProv']");

    KasusHarian.innerHTML = '20000';
    KasusHarianProv.innerHTML = '30000';
    riskProv.innerHTML = '40000';
  },
};

export default Home;
