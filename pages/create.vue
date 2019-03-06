<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Create a new Post</h1>
      <h2 class="subtitle">Something intresting...</h2>
      <div class="columns is-mobile">
        <div class="column is-half">
          <create-form @submit="handleSubmit"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreateForm from "../components/CreateForm";
export default {
  data() {
    return {
      loading: false
    };
  },
  components: {
    CreateForm
  },
  methods: {
    async handleSubmit(data) {
      try {
        this.loading = true;
        console.log("data");
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    }
  }
};
</script>
