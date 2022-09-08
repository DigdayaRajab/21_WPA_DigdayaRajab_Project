const Project = {
  template: `
    <!-- OurWorks -->
    <article id="ourwork">
      <div class="ourwork-text">
        <h1>Our Works</h1>
      </div>     
      <div class="tools-row">
        <div v-for="list_data in project">  
          <figure class="ourwork-card" >
            <div class="image"><img .src="list_data.img" alt="obj1" /></div>
            <figcaption>
              <div class="date"><img .src="list_data.logo" alt="obj1"/></div>
              <h3>{{list_data.title}}</h3>
              <p>{{list_data.description}}.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
    `,
  data() {
    return {
      project: [],
    };
  },
  mounted() {
    fetch("../projects.json")
      .then((response) => response.json())
      .then((response) => {
        this.project = response;
      });
  },
};

export default Project;
