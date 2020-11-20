<template >
  <footer class="footer font-small text-light">
      <div class="container">
        <!-- Grid row-->
        <div class="row d-flex align-items-center">

          <!-- Grid column -->
          <div class="col-md-6 col-lg-6 text-center text-md-right text-white">
            <!-- Facebook -->
            <!-- <a class="fb-ic">
              <i class="fab fa-facebook-f white-text mr-4"></i>
            </a>
            -->

            <!-- Google +-->
            <a class="gplus-ic" href="mailto: yassin.altaha@gmail.com">
              <i class="fab fa-google-plus-g white-text mr-4"></i>
            </a>
            <!--Linkedin -->
            <a class="li-ic" href="https://www.linkedin.com/in/yassin-altaha/">
              <i class="fab fa-linkedin-in white-text mr-4"></i>
            </a>
            <!--Instagram-->
            <a
              class="ins-ic"
              href="https://www.instagram.com/exospheric3/?hl=en"
            >
              <i class="fab fa-instagram mr-4"></i>
            </a>
            <!-- Github-->
            <a class="git-ic" href="https://github.com/exospher3">
              <i class="fab fa-github "></i>
            </a>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      
    </div>

    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold">Web Deisgner Joke</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            A web designer walks into a bar, but immediately leaves in disgust
            upon noticing the tables layout.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Skills</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            Java Spring
          </p>
          <p>
            JavaScript Node
          </p>
          <p>
            jQuery
          </p>
          <p>
            Full-stack
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Hobbies</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            Hiking
          </p>
          <p>
            Basketball
          </p>
          <p>
            Drawing
          </p>
          <p>
            Photography
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <hr
            class="text-light accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p><i class="fas fa-home mr-3"></i> Mississauga Ontario, CA</p>
          <p><i class="fas fa-envelope mr-3"></i> Yassin.Altaha@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> +1 647 962 6206</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3 mobile-margin">© 2020 Copyright:</div>
    <!-- Copyright -->
  </footer>
<!-- Footer -->
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style lang="scss" scoped>

.footer{
  position: sticky;
}
@media only screen and (max-width: 1010px) {
  .mobile-margin{
    margin-bottom: 5rem;
  }
}
</style>
