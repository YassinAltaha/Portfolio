<template>
  <div class="banner">
    <b-container>
      <div class="row">
        <div cols="5" class="img-col col-sm-10 col-xs-12 col-md-6">
          <img rounded src="../assets/profile.jpg" class="profile" />
        </div>
        <div cols="7" class="text-col col-sm-10 col-xs-12 col-md-6">
          <p class="h1 display-2 head">Yassin Altaha</p>
          <p class="lead">
            New graduate of the Systems Analyst Advanced Diploma from Sheridan
            College. Proficient in Java, Spring Boot frameworks, Bootstrap and
            Vue.js.
            <br />
            Awarded 2nd place in the 2019 Sheridan College capstone competition.
          </p>
          <div class="links">
            <a href="https://www.linkedin.com/in/yassin-altaha/">
              <img
                src="../assets/linkedin-icon.png"
                alt="LinkedIn-logo"
                class="link-img"
              />
            </a>
            <a href="mailto: yassin.altaha@gmail.com">
              <img
                src="../assets/gmail-icon.png"
                alt="LinkedIn-logo"
                class="link-img"
              />
            </a>
            <a href="https://www.instagram.com/exospheric3/?hl=en">
              <img
                src="../assets/instagram-icon.png"
                alt="Insta-logo"
                class="link-img"
              />
            </a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.lead {
  text-align: left;
}
.profile {
  height: auto;
  width: auto;
  max-width: 560px;
  max-height: 620px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 1%;
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
.text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.link-img {
  max-height: 45px;
  max-width: 45px;
  margin-right: 2vw;
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .banner {
    // margin-top: 1vh;
    // margin-bottom: 13vh;
    margin: 0;
    height: 100vh;
    margin-bottom: 25vh;
    overflow: scroll;
  }
  .lead {
    text-align: center;
  }
  .head {
    font-size: 2.6rem;
  }
  .profile {
    max-width: 360px;
    max-height: 220px;
    overflow: visible;
  }
}
</style>
