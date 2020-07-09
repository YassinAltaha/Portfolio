<template>
  <div id="app">
    <navBar />
    <div class="grid">
      <div class="exoheader">
        <p class="display-4 h1">{{ pageTitle }}</p>
      </div>
      <router-view class="view-container animate__animated animate__fadeInLeft animate__fast" />

      <myFooter class="myFooter" />
    </div>
  </div>
</template>
<script>
import navBar from "@/components/myNavbar.vue";
import myFooter from "@/components/Footer.vue";
export default {
  name: "app",
  data() {
    return {
      pageTitle: ""
    };
  },
  components: {
    navBar,
    myFooter
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Some Default Title";
        this.pageTitle = to.meta.title;
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/background-darkwood.jpg");
  display: flex;
  flex-direction: column;
}

.exoheader {
  grid-area: topHeader;
  p {
    margin-left: 9vw;
    float: left;
    color: white;
  }
}

.grid {
  display: grid;
  grid-template-areas:
    "topHeader"
    "main"
    "footer";
}
.view-container {
  grid-area: main;
  min-height: 88vh;
  max-height: auto;
  color: #ffe8f8;
  backdrop-filter: blur(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 1%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.myFooter {
  grid-area: footer;
}

//larger screens (WEBSITE)
@media only screen and (min-width: 1010px) {
  .view-container {
    margin-left: 9vw;
  }
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  .exoheader {
    display: none;
  }
  .myFooter {
    display: none;
  }
  .view-container {
    // margin-top: 1vh;
    // margin-bottom: 13vh;
    margin: 0;
    height: 100vh;
    padding-bottom: 0;
    height: auto;
  }
}
</style>
