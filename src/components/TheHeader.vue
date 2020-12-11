<template>
  <div class="mt-3 w-100">
    <p class="page-header">{{ passedTitle }}</p>

    <div class="dropdown">
      <div class="overlay"></div>
      <b-avatar
        class="x-avatar"
        size="3rem"
        badge
        badge-top
        badge-offset="-0.4em"
      ></b-avatar>

      <div class="dropdown-content">
        <router-link class="myNav-link" to="/">
          <b-icon icon="house" class="exo-icon"></b-icon>
          <div class="link-text">Home</div>
        </router-link>
        <router-link class="myNav-link" to="/profile">
          <b-icon icon="person-circle" class="exo-icon"></b-icon>
          <div class="link-text">Profile</div>
        </router-link>
        <router-link class="myNav-link" to="/weather">
          <b-icon icon="cloud" class="exo-icon"></b-icon>
          <div class="link-text">Weather</div>
        </router-link>
        <router-link class="myNav-link" to="/capstone-project">
          <b-icon icon="receipt-cutoff" class="exo-icon"></b-icon>
          <div class="link-text">Project</div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- <div class="mt-3">
        <p class="display-4 text-white text-start page-header header-text">{{ pageTitle }}</p>
    </div> -->
</template>
<script>
export default {
  name: "TheHeader",
  props: {
    passedTitle: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");

.page-header {
  position: relative;
  font-family: "Luckiest Guy";
  font-size: 3.5rem;
  color: white;
  float: left;
  margin-left: 7rem;
  text-shadow: 5px 10px 10px black;
}
.page-header:hover {
  transform: translateX(25px);
}
.x-avatar {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.link-text {
  display: inline-block;
}
.exo-icon {
  transform: translateX(-1em);
  display: inline-block;
}
.header-text {
  display: inline-block;
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5rem;
  color: white;
}
.dropdown {
  position: relative;
  display: inline;
  float: right;
  margin: 0.75rem 5rem 0 0;
}
/* Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border-radius: 50%;
}

/* The container <div> - needed to position the dropdown content */

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  border-radius: 10%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 7px 4px 7px 4px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 2px 12px 4px;

  text-decoration: none;
  display: block;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #c0c0c0;
  z-index: 1;
  border-radius: 50%;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
  border-radius: 15%;
}

.dropdown:hover .overlay {
  opacity: 1;
  transform: scale(1.15);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  transform: translateX(-9.5rem);
  display: block;
  margin-top: 2px;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

@media only screen and (max-width: 1010px) {
  .dropdown {
    margin-right: 1rem;
  }
  .page-header {
    margin-left: 1rem;
  }
}
</style>
