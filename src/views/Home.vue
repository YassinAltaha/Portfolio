<template>
<div>
  <b-container fluid="lg" >
    <b-row class="">
    <b-col cols="12" md="4" sm="12" class="mobile-view">
      <HomeCard class="introCard"/>
    </b-col>
    <b-col cols="12" md="8" sm="12" class="mobile-view"> <RadarChart class="mb-5 radarCard"/> </b-col>
  </b-row>
  
 <b-row class="mt-5">
    <b-col> <SkillChart class="barCard mt-5"/></b-col>
  </b-row>
   


</b-container>
</div>  
</template>
<script>
import SkillChart from "@/components/SkillChart.vue";
import RadarChart from "@/components/PersonalSkill.vue"
import HomeCard from "@/components/WelcomeCard.vue"
export default {
  name: "Home",
  data(){
    return{
    }
  },
  components: {
      SkillChart,
      RadarChart,
      HomeCard

  }
};
</script>
<style lang="scss" scoped>
/* Container holding the image and the text */
.introCard:hover{
    transform: scale(1.10);
}
.radarCard{
  float: right;
  text-align: left;
}
.barCard{
  text-align: left;
}
.radarCard:hover{
  transform: scale(1.10);
}
.barCard:hover{
  transform: scale(1.05);
}
//Smaller screens (MOBILE)
@media only screen and (max-width: 750px) {
  .radarCard{
    float: none;
    margin: auto;
    text-align: center;
  }
  .barCard{
    text-align: center;
  }
  .mobile-view{
    margin-bottom: 1.5rem ;
  }
}

</style>
