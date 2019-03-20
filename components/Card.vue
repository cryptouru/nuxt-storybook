<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="image" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="thumb" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{author}}</p>
          <p class="subtitle is-6">{{user}}</p>
        </div>
      </div>

      <div class="content">
        {{text}}
        <br>
        <small>{{date}}</small>
      </div>
    </div>

    <b-loading :active.sync="loading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    title: String,
    text: String,
    date: Date,
    image: String,
    author: String,
    user: String,
    thumb: String
  }
};
</script>

<style scoped>
</style>
