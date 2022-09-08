import About from "./about.js";
import Contact from "./contact.js";

const Home = {
  template: `
      <!-- Deskripsi -->      
      
      <article id="home">
          <div class="home-text">
            <h1>Bingung Cara Edit konten Produk Mu ?</h1>
            <span class="square"></span>
            <p>Disini kami hadir membatu kamu agar dapat mengedit konten produkmu dengan mudah tanpa ribet otak-atik desain</p>
            <a href="#about">
              <button id="homeBtn">Lihat Lebih Detail</button>
            </a>
          </div>
      </article>
      
      <div class="text-end mb-3 detail container">
          <div class="row g-0">
              <div class="col-md-6">
                <img src="assets/img/detail1.png" class="img-fluid"/>
              </div>
              <div class="col-md-6" >
                  <div class="card-body detail1">
                    <h1>Mengapa Konten<br />Produk Penting</h1>
                    <span class="square"></span>
                      <p>
                      Konten produk berkualitas merupakan hal penting untuk mendapatkan perhatian dari calon pelanggan potensial anda. Apalagi didukung dengan menggabungkan kualitas gambar menggunakan media yang menarik akan sangat menguntungkan seller.
                      Tingkatin marketing promosi Anda dengan Desain Promosi yang menarik, kreatif, profesional.
                      </p>
                  </div>
              </div>
          </div>
          <div class="row g-0">
              <div class="col-md-6 align-self-center img-detail" style="padding: 50px;">
                  <div class="card-body">
                  <h1>Gak ada waktu <br>buat ngedit ?</h1>
                  <span class="square"></span>
                  <p>
                  Membuat konten yang menarik dan berkualitas memang membutuhkan waktu yang tidak sedikit, oleh karena itu kami hadir untuk membantu kamu membuat konten dengan biaya yang sangat terjangkau
                </p>     
                  </div>
              </div>
              <div class="col-md-6">
              <img src="assets/img/detail2.jpg" class="img-fluid"/>
              </div>
          </div>
      </div>
  
      `,
};

Home.template += About.template;
Home.data = About.data;
Home.mounted = About.mounted;
Home.template += Contact.template;

export default Home;
