<template>
  <div v-if="gettingLocation">
    <img src="../assets/loading-rainbow.gif" class="loadingImage" />
    <div v-if="errorStr">{{ errorStr }}</div>
  </div>
  <div class="main" v-else>
    <div class="forecast">
      <img :src="link" class="img" />
      <h1>{{ condition.main }}</h1>
      <h2>{{ condition.description }}</h2>
      <h3>{{ city }} - {{ country }}</h3>
    </div>

    <div class="temps">
      <toggle-button
        @change="toggleDegree"
        :value="false"
        color="#82C7EB"
        :labels="{ checked: 'F', unchecked: 'C' }"
      />
      <h3>Temp : {{ temp }}</h3>
      <h3>Feels like : {{ temp_feels }}</h3>
      <h3>Min : {{ temp_min }} ~~ Max: {{ temp_max }}</h3>
      <h3>Couldy : {{ cloud }} %</h3>
    </div>

    <div class="bot-info">
      <h3>Visibility: {{ visibility }}</h3>
      <h3>Wind Speed: {{ wind.speed }}</h3>
      <h3>
        Direction:
        {{ wind.deg }} --
        <b-icon
          icon="arrow-up-circle"
          class="exo-icon"
          v-bind="{ rotate: wind.deg }"
        ></b-icon>
      </h3>
      <h3>Humidity: {{ humidity }}%</h3>
      <h3>Pressure: {{ pressure }}</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "weatherApp",
  components: { ToggleButton },

  data() {
    return {
      address: "",
      feh: false,
      location: null,
      gettingLocation: null,
      errorStr: null,
      link: null,
      autocomplete: null,

      country: null,
      city: null,
      cloud: null,
      visibility: null,
      humidity: null,
      pressure: null,

      temp: null,
      temp_min: null,
      temp_max: null,
      temp_feels: null,

      condition: {},
      forecast: {},
      wind: {},
    };
  },
  created() {
    this.gettingLocation = true;
  },
  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData) {
      this.address = addressData;
    },
    toggleDegree() {
      if (!this.feh) {
        this.temp = this.c2f(this.temp);
        this.temp_min = this.c2f(this.temp_min);
        this.temp_max = this.c2f(this.temp_max);
        this.temp_feels = this.c2f(this.temp_feels);
        this.feh = true;
      } else if (this.feh) {
        this.temp = this.f2c(this.temp);
        this.temp_min = this.f2c(this.temp_min);
        this.temp_max = this.f2c(this.temp_max);
        this.temp_feels = this.f2c(this.temp_feels);
        this.feh = false;
      }
    },
    c2f(cel) {
      return Math.round(cel * 1.8 + 32);
    },
    f2c(feh) {
      return Math.round((feh - 32) / 1.8);
    },
    k2c() {
      this.temp = Math.round(this.temp - 273.15);
      this.temp_min = Math.round(this.temp_min - 273.15);
      this.temp_max = Math.round(this.temp_max - 273.15);
      this.temp_feels = Math.round(this.temp_feels - 273.15);
    },
    async getLocation() {
      return new Promise((res, rej) => {
        if (!("geolocation" in navigator)) {
          rej(new Error("Geolocation is no avaiable"));
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            res(pos);
          },
          (err) => {
            rej(err);
          }
        );
      });
    },

    async getForecast(lati, long) {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lati +
            "&lon=" +
            long +
            "&appid=4ba6ecad9f13b3eba2c1a375d3bc2b3b"
        )
        .then((response) => {
          console.log(response.data);

          this.visibility = response.data.visibility;
          this.country = response.data.sys.country;
          this.condition = response.data.weather[0];

          this.temp = response.data.main.temp;
          this.temp_feels = response.data.main.feels_like;
          this.temp_min = response.data.main.temp_min;
          this.temp_max = response.data.main.temp_max;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity;

          this.cloud = response.data.clouds.all;

          this.wind = response.data.wind;
          this.city = response.data.name;

          this.link =
            "http://openweathermap.org/img/wn/" +
            this.condition.icon +
            "@2x.png";
          this.gettingLocation = false;

          this.k2c();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  async mounted() {
    try {
      this.location = await this.getLocation();
      await this.getForecast(
        this.location.coords.latitude,
        this.location.coords.longitude
      );
    } catch (e) {
      console.log(e);
      this.getLocation = false;
      this.errorStr = e.message;
    }
  },
};
</script>

<style scopped lang="scss">
/* Loading css */

.loadingImage {
  display: contain;
  max-width: 250px;
  margin-top: 10%;
  align-self: center;
  filter: blur(1px);
}
/* Component css */
.main {
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 1fr;
  grid-template-areas:
    "forecast temps"
    "bot-info bot-info";
  background-size: cover;
  background-position: auto;
  background-repeat: no-repeat;
}

.forecast {
  grid-area: forecast;
  align-self: center;
  img {
    grid-area: logo;
    align-self: center;
    width: 120px;
    height: 120px;
  }
}

.temps {
  grid-area: temps;
  align-self: center;
  margin-top: 55px;
}
.bot-info {
  height: auto;
  grid-area: bot-info;
  align-content: right;
  margin-top: 55px;
}

@media only screen and (max-width: 1010px) {
  /* Component css */
  .main {
    overflow: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    grid-template-areas:
      "forecast"
      "temps"
      "bot-info";
    background-repeat: no-repeat;
    margin-bottom: 25vh;
  }
}
</style>
