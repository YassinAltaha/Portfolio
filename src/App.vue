<template>
  <div id="app">
    <navBar />

    <div class="container-fluid bk-body">
      <div class="row">
        <the-header :passedTitle="pageTitle"> </the-header>
      </div>
      <div class="row justify-content-center">
        <router-view
          class="view-container animate__animated animate__fadeInLeft animate__fast"
        />
      </div>

      <div class="row justify-content-center background-c text-light">
        <the-footer class="myFooter" />
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "app",
  data() {
    return {
      pageTitle: String,
    };
  },
  components: {
    TheHeader,
    navBar,
    TheFooter,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Yassin Portfolio";
        this.pageTitle = to.meta.title;
      },
    },
  },
};
</script>
<style lang="scss">
@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
      (-0.9 + (random()) * 3) +
        em
        (-0.9 + (random()) * 3) +
        em
        1px
        hsla(random() * 360, 100%, 50%, 0.9);
  }
  text-shadow: $text-shadow;
}
.bk-body {
  color: transparent;
}

// .bk-head::before, .bk-head::after,
.bk-body::before,
.bk-body::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 5em;
  height: 5em;
  font-size: 38px;
  content: ".";
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

.bk-body::before {
  @include dots(20);
  animation-duration: 44s;
  animation-delay: -27s;
}

.bk-body::after {
  @include dots(20);
  animation-duration: 43s;
  animation-delay: -32s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 100vw;
  overflow: hidden;
  background-color: rgb(7, 47, 71);
}

.background-c {
  z-index: 1;
  background: linear-gradient(-45deg, rgb(76, 0, 255), transparent),
    repeating-linear-gradient(
      45deg,
      rgb(0, 47, 71) 0%,
      rgb(7, 47, 71) 5%,
      transparent 5%,
      transparent 10%
    ),
    rgb(118, 64, 139)
      repeating-linear-gradient(
        -45deg,
        rgba(7, 47, 71, 0.5) 0%,
        rgba(183, 0, 255, 0.5) 5%,
        transparent 5%,
        transparent 10%
      );
}

.view-container {
  padding: 2rem;
  backdrop-filter: blur(40px);
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  overflow: hidden;
  z-index: 1;
}
@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}
//larger screens (WEBSITE)
@media only screen and (min-width: 1010px) {
  .view-container {
    min-width: 85%;
    max-width: 85%;
    min-height: 85vh;
    margin-left: 3vw;
  }
}
.background-c {
  margin-top: 1rem;
  margin-left: 5vw;
  position: sticky;
  bottom: -100vh;
}
//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .myFooter {
    margin-left: 0;
  }
  .view-container {
    padding-bottom: 0;
    min-width: 450px;
    max-width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
