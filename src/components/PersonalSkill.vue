<template>
    <div class="radar-container custom-header" >
        <h3>Personal Skills </h3>
          <div class="radarChart">
            <radar-chart

                :chart-data="chartData"
                :extraOptions="options"
            >
            </radar-chart>
            </div>
        </div>
</template>

<script>
import RadarChart from "@/components/Chart/RadarChart";

export default {

    components:{
        RadarChart
    },
    data(){
        return{
          chartData: {
            labels: [
              "Organization",
              "Problem Solving",
              "Team Work",
              "Design",
              "Communication",
              "Presestance"
            ],
            datasets: [
              {
                label: "Yassin Al-Taha",
                fill: true,
                borderColor: "#F11F25",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: [90, 80, 90, 65, 95, 90, ]
              }
            ]
          },
          options:{
              maintainAspectRatio: true,
              legend: {
                display: true
              },
              responsive: true,
             tooltips: {
                backgroundColor: "#f5f5f5",
                titleFontColor: "#333",
                bodyFontColor: "#666",
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
             scale: {
                angleLines: {
                    display: true,
                    color: "rgba(29,140,248,.5)",
                },
                 gridLines: {
                  drawBorder: true,
                  color: "rgba(29,140,248,1)",
                  zeroLineColor: "transparent"
                  },
                  
                ticks: {
                    backdropColor:"transparent",
                    suggestedMin: 50,
                    suggestedMax: 100,
                    padding: 10,
                    fontColor: "#9e9e9e"
                }
            }
          } 
        }
    }
}
</script>


<style lang="scss" scoped>
.custom-header:hover{
  h3{
    background: linear-gradient(90deg,#00e1ff,#ba2ee5);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
.radar-container{
  width: 350px;
  height: 250px;
  max-width: 350px;
  max-height: 250px;

}
.radarChart{
    padding: 3%;
    background-color: #17141d;
    border-radius: 10%;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}
//Smaller screens (MOBILE)
@media only screen and (max-width: 750px) {
  .radar-container{
  align-self: center;

  }
  // .radarChart{
  //   padding: 3%;
  //   background-color: #17141d;
  //   border-radius: 2.5%;
  //   box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
  
  // }
}
</style>