<template>
  <div class="myNav">
    <ul class="myNav-ul">
      <li class="myNav-logo">
        <b-icon
          icon="caret-right-fill"
          class="h1 logo-img"
          style="color: #7952b3;"
        ></b-icon>
      </li>

      <li class="myNav-item">
        <router-link class="myNav-link" to="/">
          <b-icon icon="house" class="exo-icon"></b-icon>
          <div class="link-text">Home</div>
        </router-link>
      </li>
      <li class="myNav-item">
        <router-link class="myNav-link" to="/profile">
          <b-icon icon="person-circle" class="exo-icon"></b-icon>
          <div class="link-text">Profile</div>
        </router-link>
      </li>
      <li class="myNav-item">
        <router-link class="myNav-link" to="/weather">
          <b-icon icon="cloud" class="exo-icon"></b-icon>
          <div class="link-text">Weather</div>
        </router-link>
      </li>
      <li class="myNav-item">
        <router-link class="myNav-link" to="/capstone-project">
          <b-icon icon="receipt-cutoff" class="exo-icon"></b-icon>
          <div class="link-text">Project</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$main-color: lightgreen;
$secondary-color: rgb(69, 0, 116);

.myNav {
  font-weight: bold;
  font-size: 30px;
  width: 6rem;
  height: 100vh;
  position: fixed;
  background-color: black;
  transition: width 150ms;
  z-index: 2;
}

.myNav-ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.myNav-item {
  width: 100%;
  filter: grayscale(20%) opacity(0.7);
  transition: 600ms;
  :hover {
    filter: grayscale(0%) opacity(1);
    background: $secondary-color;
  }

  .myNav-item:last-child {
    margin: auto;
  }

  .myNav-link {
    display: flex;
    align-items: center;
    height: 6rem;
    color: $main-color;
    text-decoration: none;

    .exo-icon {
      min-width: 50px;
      margin: 0 1.5rem;
    }
  }
}

.link-text {
  display: none;
}

/*Large Screens*/
@media only screen and (min-width: 1010px) {
  .myNav-logo {
    display: block;
    margin: 15px;
    transform: translateY(15px);
  }
  .myNav-logo:hover {
    .logo-img:hover {
      transform: rotate(450deg);
      transition-duration: 3000ms;
    }
  }
  .myNav {
    top: 0;
    width: 6rem;
    height: 100vh;
  }
  .myNav-item:hover {
    .link-text,
    .exo-icon {
      transform: translateX(10px);
    }
  }
  .myNav:hover {
    width: 18rem;

    .link-text {
      display: inline;
      transition: opacity var(600ms);
    }
    .logo-img {
      transform: rotate(90deg);
      transition-duration: 300ms;
    }
  }
}

/*Smaller Screens*/
@media only screen and (max-width: 1010px) {
  .myNav-logo {
    display: none;
  }

  .myNav {
    bottom: 0;
    width: 100vw;
    height: 6rem;
    z-index: 2;
  }
  .myNav-ul {
    flex-direction: row;
    align-items: stretch;
  }
  .myNav-item {
    margin-left: -5px;
    // justify-content: stretch;
  }

  .exo-icon {
    max-width: 5px;
    margin: auto;
  }

  .myNav-link {
    justify-content: center;
  }

  .myNav:hover {
    // width: 16rem;

    .link-text {
      display: none;
      transition: opacity var(600ms);
    }
  }
}
</style>
