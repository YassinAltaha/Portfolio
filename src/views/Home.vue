<template>
  <div class="banner">
    <p class="h1 display-1 head">Welcome!</p>
    <p class="lead">
      To Yassin Altaha's portfolio created using Vue js and Bootstrap <br />
      and hosted on Netlify
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  overflow: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  p {
    color: white;
    padding: 10px;
  }
}

//Smaller screens
@media only screen and (max-width: 1010px) {
  .banner {
    overflow: hidden;
    background-size: cover;
    display: flex;
    flex-direction: auto;
    justify-content: auto;
    align-items: center;
    margin-bottom: 32px;
    p {
      color: white;
      padding: 10px;
    }

    .head {
      font-size: 3.6rem;
    }
  }
}
</style>
