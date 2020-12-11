<template>
  <div class="">
    <div class="card mb-3 bg-transparent" style="max-width: auto;">
      <div class="row no-gutters mobile-sass">
        <div class="col-md-5">
          <img
            src="../assets/profile-min.jpeg"
            class="img-fluid card-img"
            alt="Profile Picture"
          />
        </div>
        <div class="col-md-7 d-flex">
          <div class="card-body align-self-center custom-header">
            <h5 class="card-title display-1">Yassin AlTaha</h5>
            <h5>Software Developer / Web designer.</h5>

            <p class="card-text">
              Award winning software developer, graduated from Sheridan College
              with a degree in Computer System Analysis and minor in Art
              Fundamentals .
            </p>

            <div class="links links-backdrop mt-5">
              <a href="https://www.linkedin.com/in/yassin-altaha/">
                <img
                  src="../assets/linkedin-icon-min.png"
                  alt="LinkedIn-logo"
                  class="link-img"
                />
              </a>
              <a href="mailto: yassin.altaha@gmail.com">
                <img
                  src="../assets/gmail-icon-min.png"
                  alt="LinkedIn-logo"
                  class="link-img"
                />
              </a>
              <a href="https://www.instagram.com/exospheric3/?hl=en">
                <img
                  src="../assets/instagram-icon-min.png"
                  alt="Insta-logo"
                  class="link-img"
                />
              </a>
              <a href="https://github.com/yassinaltaha">
                <img
                  src="../assets/github2-min.png"
                  alt="gitHub-logo"
                  class="link-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-img {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
}
.card-img:hover {
  transform: scale(1.05);
}
.links-backdrop {
  padding: 3%;
  background-color: #17141d;
  border-radius: 2.5%;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
}
.card-title,
.card-text {
  text-shadow: 2px 5px 5px black;
}
.link-img {
  max-height: 655px;
  max-width: 65px;
  margin-right: 2vw;
  // box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
}
.custom-header:hover {
  h5 {
    transform: translateY(-15px);
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
.link-img:hover {
  transform: translateY(-20px);
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .card-title {
    font-size: 3.6em;
  }
  // .mobile-sass {
  //   margin-bottom: 10vh;
  // }
}
</style>
