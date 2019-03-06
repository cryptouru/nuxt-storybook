<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" id="logo" to="/">
          <img src="croped.png" alt>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link tag="a" class="navbar-item" to="/" exact>Home</router-link>

          <router-link tag="a" class="navbar-item" to="/create" exact>Create</router-link>

          <a class="navbar-item" v-if="username">Hello {{ username }}</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider">
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a v-if="username" class="button is-primary" @click="$emit('logout')">Logout</a>
              <router-link
                v-if="!username"
                tag="a"
                class="button is-primary"
                to="/signup"
                exact
              >Sign Up</router-link>
              <router-link v-if="!username" tag="a" class="button is-light" to="/signin" exact>Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String
    }
  }
};
</script>

<style>
#logo img {
  max-height: 2.5em;
}
</style>
