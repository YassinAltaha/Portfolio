<template>
  <div id="app">
     <navBar />
    <myBackgroud>
    </myBackgroud>
    <div class="container-fluid "  >
       
      <div class="row">
        <myHeader :pageTitle="pageTitle"> </myHeader>
      </div>
      <div class="row justify-content-center">
        
        <router-view class="view-container animate__animated animate__fadeInLeft animate__fast" />
      </div>
    
      <div class="row justify-content-center background-c text-light">
        <myFooter class="myFooter" />
      </div>
     
    </div>
    
  </div>
</template>
<script>
import navBar from "@/components/myNavbar.vue";
import myFooter from "@/components/Footer.vue";
import myHeader from "@/components/myHeader.vue";
import myBackgroud from "@/components/bg.vue";
export default {
  name: "app",
  data(){
    return{
      pageTitle: "",
 
    }
  },
  components: {
    myHeader,
    myBackgroud,
    navBar,
    myFooter
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: transparent;
  
}


.background-c{
  backdrop-filter: blur(5px);
  background:linear-gradient(-45deg, rgb(76,0,255), transparent),
             repeating-linear-gradient(45deg, rgb(0, 47, 71) 0%, rgb(7, 47, 71) 5%, transparent 5%, transparent 10%),
             rgb(118, 64, 139) repeating-linear-gradient(-45deg , rgba(7,47,71, 0.5) 0%, rgba(183,0,255,0.5) 5%, transparent 5%, transparent 10%);
}

.view-container {
  padding: 2rem;
  backdrop-filter: blur(50px);
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  overflow: hidden;
}

//larger screens (WEBSITE)
@media only screen and (min-width: 1010px) {
  .view-container {
    min-width: 85%;
    max-width: 85%;
    min-height: 100vh;
    margin-left: 3vw;
    margin-bottom: 3rem;
    
  }
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 1010px) {
  
  .myFooter{
  margin-left: 0;
  }
  .view-container {
    padding-bottom: 0;
    min-width: 450px;
    max-width: 100%;
    min-height: 100vh;
    margin-bottom: 1rem;
  }
}
</style>
