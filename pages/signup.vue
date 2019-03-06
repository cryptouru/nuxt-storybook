<template>
  <section class="container">
    <div class="col-md-6 offset-md-3 mt-3">
      <form autocomplete="off" @submit.stop.prevent="handleSubmit">
        <b-field label="Username" type="is-danger" message="This email is invalid">
          <b-input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter a username"
            maxlength="48"
          ></b-input>
        </b-field>

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
        <button :disabled="loading" type="submit" class="button is-primary">Submit</button>
        <p>Already have an account?
          <router-link :to="{ name: 'signin'}" tag="a">Login</router-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        console.log({
          username: this.username,
          password: this.password,
          email: this.email
        });
        this.loading = false;
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    }
  }
};
</script>
