
  <template>
  <div class="banner bg-transparent" style="max-width: auto;">
    <div class="row no-gutters">
      <div class="col-md">
        <h5 class="display-1 head">Welcome!</h5>
        <p class="display-5">
          To Yassin Altaha's responsive portfolio created using Vue js and Bootstrap
          <br />and hosted on Netlify
        </p>
      </div>
    </div>
  </div>
</template>

  <!-- <div class="banner">
    <p class="h1 display-1 head">Welcome!</p>
    <p class="lead">
      To Yassin Altaha's portfolio created using Vue js and Bootstrap
      <br />and hosted on Netlify
    </p>
  </div>-->

<script>
export default {
  name: "Home",
  props: {}
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
    flex-direction: auto;
    justify-content: auto;

    .head {
      font-size: 3.6rem;
    }
  }
}
</style>
