const Contact = {
  template: `

  <section id="contact"  class="contact-container row container" >
  <div class="col-md-8 contact">   
    <div class="row justify-content-center ">
      <div class="col-md-6 contact-form">
        <form>        
             <div class="contact-title">
                <h2>Contact Me</h2>
            </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="email" />
          </div>
          <div class="mb-3">
            <label for="pesan" class="form-label">Message</label>
            <textarea class="form-control" id="pesan" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-dark color-white">Kirim</button>
        </form>
      </div>      
    </div>
  </div>
  

    <aside id="creator" class="ddd col-md-4">
    <article class="profile cardProfile">
        <header>
        <h3>About me</h3>
        <br />
        <figure>
            <img src="assets/img/profile.jpg"/>
        </figure>
        <br />
        <h3>Digdaya R</h3>
        </header>
        <section>
        <br>
            <h5>Desain Grafis & Illustrator</h5>          
            <p>Rdigdaya84@gmail.com</p>
            <p>Nganjuk</p>
        
        </section>
    </article>
    </aside>

    </section>
    
    `,
};
export default Contact;
