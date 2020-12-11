<template>
  <div class="">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <h3>Weather APP using OpenWeather API, Axois and Geolocation</h3>
      </div>
      <div class="row d-block m-5" v-if="gettingLocation">
        <div
          class="spinner-border m-auto spinner-css d-block"
          style="width: 10rem; height: 10rem;"
        ></div>

        <div v-if="errorStr" class="d-block m-5">{{ errorStr }}</div>
      </div>

      <div class="" v-else>
        <section class="custom-card-list">
          <!-- -->
          <article class="custom-card">
            <header class="custom-card-header">
              <img :src="link" class="fimg" />
              <p>Forcast:</p>
              <h2>{{ condition.main }}</h2>
            </header>

            <div class="custom-card-author">
              <div class="author-name-prefix">Description</div>
              {{ condition.description }}
            </div>
            <div class="tags">
              <a href="#">{{ city }}</a>
              <a href="#">{{ country }}</a>
            </div>
          </article>
          <!-- -->

          <!-- -->
          <article class="custom-card">
            <div class="mb-4 text-right">
              <label class="switch" @change="toggleDegree">
                <input type="checkbox" />
                <div>
                  <span>{{ tempUnite }}</span>
                </div>
              </label>
            </div>

            <header class="custom-card-header">
              <p>Temperature:</p>
              <h2>{{ temp }} {{ tempUnite }}</h2>
              <p>Feels Like</p>
              <h2>{{ temp_feels }} {{ tempUnite }}</h2>
            </header>

            <div class="custom-card-author">
              <div class="author-name-prefix">Minimum</div>
              {{ temp_min }} {{ tempUnite }}
            </div>
            <div class="custom-card-author">
              <div class="author-name-prefix">Maximum</div>
              {{ temp_max }} {{ tempUnite }}
            </div>
          </article>
          <!-- -->

          <!-- -->
          <article class="custom-card">
            <header class="custom-card-header">
              <p>Condition:</p>
            </header>

            <div class="lower-tags">
              <a href="#">Visibility: {{ visibility }} m</a> <br />
              <a href="#">Wind Speed: {{ wind.speed }} m/s</a><br />
              <a href="#">Pressure: {{ pressure }} </a><br />
              <a href="#">Humidity: {{ humidity }}%</a><br />
            </div>
          </article>
          <!-- -->
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "weather-app",
  data() {
    return {
      address: "",
      feh: false,
      location: null,
      gettingLocation: null,
      errorStr: null,
      link: null,
      autocomplete: null,
      tempUnite: "C",
      country: null,
      city: null,
      cloud: null,
      visibility: null,
      humidity: null,
      pressure: null,
      testWind: "180",
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
    $_getAddressData: function(addressData) {
      this.address = addressData;
    },
    $_toggleDegree() {
      if (!this.feh) {
        this.tempUnite = "F";
        this.temp = this.c2f(this.temp);
        this.temp_min = this.c2f(this.temp_min);
        this.temp_max = this.c2f(this.temp_max);
        this.temp_feels = this.c2f(this.temp_feels);
        this.feh = true;
      } else if (this.feh) {
        this.tempUnite = "C";
        this.temp = this.f2c(this.temp);
        this.temp_min = this.f2c(this.temp_min);
        this.temp_max = this.f2c(this.temp_max);
        this.temp_feels = this.f2c(this.temp_feels);
        this.feh = false;
      }
    },
    $_c2f(cel) {
      return Math.round(cel * 1.8 + 32);
    },
    $_f2c(feh) {
      return Math.round((feh - 32) / 1.8);
    },
    $_k2c() {
      this.temp = Math.round(this.temp - 273.15);
      this.temp_min = Math.round(this.temp_min - 273.15);
      this.temp_max = Math.round(this.temp_max - 273.15);
      this.temp_feels = Math.round(this.temp_feels - 273.15);
    },
    async $_getLocation() {
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

    async $_getForecast(lati, long) {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lati +
            "&lon=" +
            long +
            "&appid=4ba6ecad9f13b3eba2c1a375d3bc2b3b"
        )
        .then((response) => {
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

          this.$_k2c();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  async mounted() {
    try {
      this.location = await this.$_getLocation();
      await this.$_getForecast(
        this.location.coords.latitude,
        this.location.coords.longitude
      );
    } catch (e) {
      // console.log(e);
      this.getLocation = false;
      this.errorStr = e.message;
    }
  },
  computed: {
    degreeIcon() {
      return { transform: "rotate(" + this.wind.deg + "deg)" };
    },
  },
};
</script>

<style scopped lang="scss">
/* Toggle Button CSS */
.switch {
  --line: #505162;
  --dot: #f7f8ff;
  --circle: #9ea0be;
  --duration: 0.3s;
  --text: #9ea0be;
  cursor: pointer;
  input {
    display: none;
    & + div {
      position: relative;
      &:before,
      &:after {
        --s: 1;
        content: "";
        position: absolute;
        height: 4px;
        top: 10px;
        width: 24px;
        background: var(--line);
        transform: scaleX(var(--s));
        transition: transform var(--duration) ease;
      }
      &:before {
        --s: 0;
        left: 0;
        transform-origin: 0 50%;
        border-radius: 2px 0 0 2px;
      }
      &:after {
        left: 28px;
        transform-origin: 100% 50%;
        border-radius: 0 2px 2px 0;
      }
      span {
        padding-left: 56px;
        line-height: 24px;
        color: var(--text);
        &:before {
          --x: 0;
          --b: var(--circle);
          --s: 4px;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          box-shadow: inset 0 0 0 var(--s) var(--b);
          transform: translateX(var(--x));
          transition: box-shadow var(--duration) ease,
            transform var(--duration) ease;
        }
        &:not(:empty) {
          padding-left: 64px;
        }
      }
    }
    &:checked {
      & + div {
        &:before {
          --s: 1;
        }
        &:after {
          --s: 0;
        }
        span {
          &:before {
            --x: 28px;
            --s: 12px;
            --b: var(--dot);
          }
        }
      }
    }
  }
}
.spinner-css {
  display: block;
}

/* Loading css */
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Component css */

.fimg {
  width: 120px;
  height: 120px;
}

.custom-card {
  height: 450px;
  width: 300px;
  min-width: 250px;

  padding: 1.5rem;
  border-radius: 10%;
  background: #17141d;
  box-shadow: 10px 30px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  margin: 0;
  scroll-snap-align: center;
  clear: both;
  position: relative;
  padding-top: 4rem;
}
@media only screen and (min-width: 750px) {
  .custom-card:focus-within ~ .custom-card,
  .custom-card:hover ~ .custom-card {
    transform: translateX(100px);
  }

  .custom-card:hover {
    transform: translateY(-1rem);
  }

  .custom-card:not(:first-child) {
    margin-left: -30px;
  }
}
@media only screen and (max-width: 750px) {
  .custom-card:focus-within ~ .custom-card,
  .custom-card:hover ~ .custom-card {
    transform: translateY(130px);
  }

  .custom-card:hover {
    transform: translateX(-1rem);
  }

  .custom-card:not(:first-child) {
    margin-top: -130px;
  }
}
.custom-card-list {
  display: flex;
  padding: 3rem;
  overflow: show;
  justify-content: center;
  justify-self: center;
}

.custom-card-list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.custom-card-list::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}

.custom-card-list::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
}
@media only screen and (max-width: 750px) {
  .custom-card-list {
    flex-direction: column;
    padding: 0;
  }
}
.custom-card-header {
  margin-bottom: 0;
}

.custom-card-header p {
  font-size: 14px;
  margin: 0 0 1rem;
  color: #7a7a8c;
}

.custom-card-header h2 {
  font-size: 2rem;
  text-decoration: none;
  color: inherit;
  border: 0;
  display: inline-block;
  cursor: pointer;
}

.custom-card-header h2:hover {
  background: linear-gradient(90deg, #0011ff, #ba2ee5);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.custom-card-author {
  margin: 1rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  position: relative;
}

.author-avatar {
  grid-area: auto;
  align-self: start;
  position: relative;
  box-sizing: border-box;
}

.author-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  display: block;
  overflow: hidden;
  margin: 16px 10px;
}

.author-name {
  grid-area: auto;
  box-sizing: border-box;
}

.author-name-prefix {
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
}

.tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;
}

.tags a {
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;
}

.tags a:hover {
  background: linear-gradient(90deg, #0011ff, #ba2ee5);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-clip: text;
  border-color: white;
}

.lower-tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;
}

.lower-tags a {
  display: block;
  font-style: normal;
  font-weight: 700;

  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.75rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;
}

.lower-tags a:hover {
  background: linear-gradient(90deg, #0011ff, #ba2ee5);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-clip: text;
  border-color: white;
}
@media only screen and (max-width: 1010px) {
  /* Component css */

  .img {
    width: 75px;
    height: 75px;
  }
}
</style>
