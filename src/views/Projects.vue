<template>
  <div class="banner">
    <div class="card extra-card">
      <div class="row no-gutters">
        <div class="col-md-6">
          <iframe
            class="youtube"
            src="https://www.youtube.com/embed/x56Z5eIMPjo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-5 project-text">
          <div class="card-body">
            <h2 class="card-title">Sheridan's Capstone Portal</h2>
            <p class="card-text">
              Automated Sheridan’s capstone program duties, by designing and
              developing a one stop online portal. Clients and students needed
              to manage their respective projects and groups, and for professors
              to oversee and analyze data and print out necessary reports.
            </p>
            <div class="card-footer bg-transparent border-success ">
              <div class="container">
                <div class="row">
                  <div class="card extra-footer-card">
                    <div class="card-block">
                      <h3 class="card-title">Back-End</h3>
                      <p class="card-text">
                        MySQL | Tomcat | LinuxOS
                      </p>
                    </div>
                  </div>

                  <div class="card extra-footer-card">
                    <div class="card-block">
                      <h3 class="card-title">Middleware</h3>
                      <p class="card-text">
                        Hibernate | Spring Security | Spring MVC | Maven
                      </p>
                    </div>
                  </div>
                  <div class="card extra-footer-card">
                    <div class="card-block">
                      <h3 class="card-title">Front-end</h3>
                      <p class="card-text">
                        Theymleaf | Bootstrap | Html5 | CSS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.extra-card {
  border: 0;
  width: 100vw;
  background-color: transparent;
  padding-left: 100px;
  margin: 0;
}
.extra-footer-card {
  text-align: left;
  border: 0;
  width: 100vw;
  background-color: transparent;
  margin: 0;
  margin-top: 10px;
}
.card-text {
  text-align: left;
}
.banner {
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  p {
    color: white;
    padding: 10px;
  }
}

.youtube {
  width: 100%;
  height: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
}

.footer-card {
  background-color: b;
  min-width: 320px;
  height: 320px;
  width: 320px;
  max-height: 320px;
}
.project-text {
  margin-left: 3rem;
}
//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .youtube {
    width: auto;
    height: auto;
    margin-left: 4vw;
    margin-top: 10vh;
  }
  .banner {
    // margin-top: 1vh;
    // margin-bottom: 13vh;
    margin: 0;
    height: 100vh;
    margin-bottom: 25vh;

    overflow: scroll;
  }
  .head {
    font-size: 2.6rem;
  }
  .extra-card {
    padding-left: 0;
  }
  .project-text {
    margin-left: 0rem;
  }
}
</style>
