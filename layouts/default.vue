<template>
  <div>
    <Header @logout="logout" :username="username"/>
    <nuxt/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header
  },
  computed: {
    username() {
      return "test";
    }
  },
  methods: {
    logout() {
      console.log("logout");
    }
  }
};
</script>
