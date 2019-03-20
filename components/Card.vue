<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img src="https://via.placeholder.com/728x430.png" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://via.placeholder.com/90" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">John Smith</p>
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <a>@bulmaio</a>.
        <a>#css</a>
        <a>#responsive</a>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>

    <b-loading :active.sync="loading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
export default {
  props: ["loading"]
};
</script>

<style scoped>
</style>
