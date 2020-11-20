<template>
  <div class="custom-header">
    <div class="">
      <h3 >Technical Skills</h3>
    </div>
    <div class="barChart-css p-5">
      <bar-chart
        style="height: 100%"
        chart-id="blue-bar-chart"
        :chart-data="blueBarChart.chartData"
        :gradient-stops="blueBarChart.gradientStops"
        :extra-options="blueBarChart.extraOptions"
      >
      </bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Chart/BarChart";

export default {
  name: "SkillChart",
  components: {
    BarChart
  },
  data() {
    return {
      blueBarChart: {
        extraOptions: {
          maintainAspectRatio: false,
          legend: {
            display: false
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
          scales: {
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent"
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 100,
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent"
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }
            ]
          }
        },
        chartData: {
          labels: [
            "Java",
            "JavaScript",
            "Spring Frameworks",
            "Vue.Js",
            "Bootstrap",
            "GitHub"
          ],
          datasets: [
            {
              label: "Java",
              fill: true,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [90, 85, 90, 85, 100, 80]
            }
          ]
        },
        gradientColors: [
          "rgba(29,140,248,0.2)",
          "rgba(29,140,248,0.0)",
          "rgba(29,140,248,0)"
        ],
        gradientStops: [1, 0.4, 0]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.barChart-css{
    padding: 1%;
    background-color: #17141d;
    border-radius: 10%;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
}
.custom-header:hover  {
  h3{
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    }
}
</style>