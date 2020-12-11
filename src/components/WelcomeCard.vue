<template>
  <div class="container">
    <h3 class="header-text">Introduction</h3>
    <div class="myCard">
      <div class="card-header">
        <h5 class="card-title">Welcome to Yassin's Portfolio</h5>
        <p>
          This is my website show casing some of my design skills. Built
          Entirely using Vue.js and Bootstrap
        </p>
      </div>

      <div class="card-body">
        <p>
          Computers and art have always fascinated me, designing and developing
          software encompass both of those aspects perfectly. I Aim towards
          learning and creating new applications as I move forward in the
          journey as a developer.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exo-card",
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.myCard {
  padding: 1.5rem;
  border-radius: 10%;
  background: #17141d;
  box-shadow: 10px 30px 30px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  height: 350px;
  width: 450px;

  .card-header {
    p {
      font-size: 14px;
      margin: 1rem 0 0 0;
      color: #7a7a8c;
    }
  }
  .card-body {
    justify-self: center;
    font-size: 15px;
  }
}
.header-text {
  text-align: left;
}
.container:hover {
  h3 {
    background: linear-gradient(90deg, #00ff00, #ba2ee5);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}
@media only screen and (max-width: 990px) {
  .myCard {
    width: 350px;
  }
}

//Smaller screens (MOBILE)
@media only screen and (max-width: 750px) {
  .myCard {
    margin: auto;
  }
  .header-text {
    text-align: center;
  }
}
</style>
