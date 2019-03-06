<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into
        <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData(context) {
    if (context.params.provider) {
      try {
        console.log("this runs server side");
        return { show: true };
      } catch (err) {
        console.log(err.message || "An error occurred.");
      }
    }
  }
};
</script>
