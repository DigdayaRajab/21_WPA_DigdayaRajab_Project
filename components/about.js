const About = {
  template: `
  <!-- Service -->
  <div class="text-center service-container">
      <div class="row container">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <img src="assets/img/detail2.jpg"
                  alt="Gambar Animasi" class="img-fluid imgform">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 service-text">
              <h3 class="mb-3" >Apa Yang Kami Lakukan <br>Untuk Anda?</h3>
              <p>
              Konten produk berkualitas merupakan hal penting untuk mendapatkan perhatian dari calon pelanggan potensial anda. Apalagi didukung dengan menggabungkan kualitas gambar menggunakan media yang menarik akan sangat menguntungkan seller.
              Tingkatin marketing promosi Anda dengan Desain Promosi yang menarik, kreatif, profesional.
              Membuat konten yang menarik dan berkualitas memang membutuhkan waktu yang tidak sedikit, oleh karena itu kami hadir untuk membantu kamu membuat konten dengan biaya yang sangat terjangkau
                </p> 
          </div>
      </div>
  </div>

  <!-- Tools Container -->
      <article id="tools">
        <div class="tools-text">
          <h1>Tools</h1>          
        </div>
        <div class="tools-row">
          <div class="tools-col card">
            <img src="assets/img/ai-logo.png" alt="3D Modeling" />
            <h4>Illustrator</h4>
            
            <p>Software Desain Grafis berbasis Vektor, untuk Desain ilustrasi dan visual</p>
          </div>
          <div class="tools-col card">
            <img src="assets/img/ps-logo.png" />
            <h4>Photoshop</h4>        
            <p>Software Desain Grafis berbasis Bitmap, untuk pengeditan foto/gambar </p>
          </div>
          <div class="tools-col card">
            <img src="assets/img/blender-logo.png" />
            <h4>Corel Draw</h4>
            <p>Software Desain 3D, untuk object dan environtment 3 Dimensi</p>
          </div>
        </div>
      </article>

      <!-- Testimony -->
      <article id="testi">
      <div class="testi-text">
        <h1>Testimoni</h1>
        <p>Dari Mereka yang menggunakan jasa kami</p>
      </div>
      <div v-if="loading">        
        <img src="assets/img/Loading.gif"  class="loading_img"/>
      </div>
      <div v-else>
        <div class="tools-row">
          <div class="tools-col" v-for="list_data in testi">
            <figure class="testi-card">
              <blockquote>{{list_data.message}}</blockquote>
              <div class="author">
                <img .src="list_data.avatar" alt="sq-sample1" />
                <h5>{{list_data.name}}<span> {{list_data.designation}}</span></h5>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </article>

    `,
  data() {
    return {
      testi: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://testimonialapi.toolcarton.com/api")
      .then((response) => response.json())
      .then((response) => {
        this.loading = false;
        this.testi = response.slice(0, 3);
      });
  },
};

export default About;
