<template >
  <footer>
    <div class="main-content">
      <div class="left box">
        <h2>About Us</h2>
        <div class="content">
          Bluejandslkfjnalkjsdnflakn lajsndflansdljkfn alkjdsnf lkjansdjlkf naklsndf kjlansdk nflajn lkjansdjlkf
          <div class="social">
            <a href="https://www.instagram.com/exospheric3/?hl=en">
              <span>
                <img src="../assets/instagram-icon.png" alt="Insta-logo" class="link-img" />
              </span>
            </a>
            <a href="https://www.instagram.com/exospheric3/?hl=en">
              <span>
                <img src="../assets/instagram-icon.png" alt="Insta-logo" class="link-img" />
              </span>
            </a>
            <a href="https://www.instagram.com/exospheric3/?hl=en">
              <span>
                <img src="../assets/instagram-icon.png" alt="Insta-logo" class="link-img" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="center box">
        <h2>Address</h2>
        <div class="content">
          <div class="phone">
            <span>
              <h3>Phone</h3>
            </span>
            <span class="text">+1 (647)962-6206</span>
          </div>
          <div class="Phone">
            <span>
              <h3>Phone</h3>
            </span>
            <span class="email">Yassin.Altaha@gmail.com</span>
          </div>
          <div class="place">
            <span>
              <h3>Location</h3>
            </span>
            <span class="text">Ontario, Canada</span>
          </div>
        </div>
      </div>
      <div class="right box">
        <h2>Contact Us</h2>
        <div class="content">
          <form action="#">
            <div class="email">
              <div class="text">Email *</div>
              <input type="email" required />
            </div>
            <div class="msg">
              <div class="text">Message *</div>
              <textarea required cols="25" rows="2"></textarea>
            </div>
            <div class="btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*Large Screens*/
@media only screen and (min-width: 1010px) {
  footer {
    padding-left: 5vw;
  }
}
////////----------------------------------------------------------------------------------------\\\\\\\\\\\\\\\
.link-img {
  max-height: 45px;
  max-width: 45px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: white;
}
footer {
  position: relative;
  bottom: 0px;
  width: 100%;
  background: #111;
}

.main-content {
  display: flex;
  .box {
    flex-basis: 50%;
    padding: 10px 20px;
  }
}
.box {
  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .content {
    margin: 20px 0 0 0;
  }
}

.left {
  .content {
    p {
      text-align: justify;
    }
    .social {
      margin: 20px 0 0 0;

      a {
        padding: 0 2px;
      }
    }
  }
}
</style>