<template>
  <section class="section">
    <div class="container">
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <b-field label="Email" type="is-danger" message="This email is invalid">
          <b-input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            maxlength="48"
          ></b-input>
        </b-field>

        <b-field
          label="Password"
          type="is-warning"
          :message="['Password is too short', 'Password must have at least 8 characters']"
        >
          <b-input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
            maxlength="48"
          ></b-input>
        </b-field>
        <button :disabled="loading" class="button is-primary" @click="handleSubmit">Submit</button>
      </form>
      <p class="text">No account yet?
        <router-link :to="{ name: 'signup'}" tag="a">Register</router-link>
      </p>
      <div class="buttons">
        <button :disabled="loading" @click="providerLogin('facebook')" class="button is-warning">
          <b-icon pack="fab" icon="facebook-square"></b-icon>
          <span>Facebook</span>
        </button>
        <button :disabled="loading" @click="providerLogin('google')" class="button is-dark">
          <b-icon pack="fab" icon="google"></b-icon>
          <span>Google</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        console.log("login");
        console.log({
          email: this.email,
          password: this.password
        });
        this.loading = false;
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    providerLogin(provider) {
      console.log("provider login");
    }
  }
};
</script>
