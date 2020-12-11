<template>
  <div class="">
    <div class="row mRow">
      <div class="col-lg-7 col-md-12">
        <div class="embed-responsive embed-responsive-1by1">
          <iframe
            style="box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);"
            src="https://www.youtube.com/embed/x56Z5eIMPjo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="col-lg-5 col-md-12 text-left ">
        <div class="card-body">
          <h2 class="card-title">Sheridan's Capstone Portal</h2>
          <p class="card-text">
            Automated Sheridan’s capstone program duties, by designing and
            developing a one stop online portal.
          </p>
          <h4>Responsiblities</h4>
          <p class="card-text">
            Setting up Spring Security to handle role-based authentication and
            authorization. configuring hibernate to connect to MySQL server, and
            map out the relations between the clients and students needed to
            manage their respective projects and groups. At the same time,
            professors needed admin users and print out necessary reports. using
            Theymleaf we parsed the middleware data, and bootstrap to wrap it up
            using nice prebuilt components.
          </p>

          <div class="card-footer bg-transparent border-0">
            <div class="row ">
              <div class="card extra-footer-card bg-transparent border-0 mt-3">
                <div class="card-block">
                  <h3 class="card-title">Back-End</h3>
                  <p class="card-text">MySQL | Tomcat | LinuxOS</p>
                </div>
              </div>

              <div class="card extra-footer-card bg-transparent border-0 mt-3">
                <div class="card-block">
                  <h3 class="card-title">Middleware</h3>
                  <p class="card-text">
                    Hibernate | Spring Security | Spring MVC | Maven
                  </p>
                </div>
              </div>
              <div class="card extra-footer-card bg-transparent border-0 mt-3">
                <div class="card-block">
                  <h3 class="card-title">Front-end</h3>
                  <p class="card-text">Theymleaf | Bootstrap | Html5 | CSS</p>
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
export default {
  name: "starter-page",
};
</script>
<style lang="scss" scoped>
.mRow {
  text-shadow: 2px 5px 5px black;
}
</style>
