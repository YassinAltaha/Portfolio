
  <template>
  <div class="card mb-3 bg-transparent" style="max-width: auto;">
    <div class="row no-gutters mobile-sass">
      <div class="col-md-5">
        <img src="../assets/profile.jpg" class="card-img" alt="Profile Picture" />
      </div>
      <div class="col-md-7 card-body-extra">
        <div class="card-body card-body-extra">
          <h5 class="card-title display-1">Yassin AlTaha</h5>
          <p class="card-text">
            New graduate of the Systems Analyst Advanced Diploma from Sheridan
            College. Proficient in Java, Spring Boot frameworks, Bootstrap and
            Vue.js.
          </p>
          <div class="links rounded">
            <a href="https://www.linkedin.com/in/yassin-altaha/">
              <img src="../assets/linkedin-icon.png" alt="LinkedIn-logo" class="link-img" />
            </a>
            <a href="mailto: yassin.altaha@gmail.com">
              <img src="../assets/gmail-icon.png" alt="LinkedIn-logo" class="link-img" />
            </a>
            <a href="https://www.instagram.com/exospheric3/?hl=en">
              <img src="../assets/instagram-icon.png" alt="Insta-logo" class="link-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-body-extra {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

.link-img {
  max-height: 45px;
  max-width: 45px;
  margin-right: 2vw;
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .card-title {
    font-size: 3.6rem;
  }
  .mobile-sass {
    overflow: scroll;
    margin-bottom: 10vh;
  }
  .card-img {
    max-width: 60%;
    max-height: 70%;
  }
}
</style>
