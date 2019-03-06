<template>
  <form autocomplete="off" @submit.stop.prevent="$emit('submit', formData)">
    <b-field label="Title">
      <b-input v-model="formData.title" required></b-input>
    </b-field>
    <b-field label="Add some tags">
      <b-taginput v-model="formData.tags" ellipsis icon="label" placeholder="Add a tag"></b-taginput>
    </b-field>
    <b-upload v-model="formData.image" drag-drop required native @input="imageChange">
      <section class="section">
        <div class="content has-text-centered">
          <p>
            <b-icon icon="upload" size="is-large"></b-icon>
          </p>
          <p>Drop your image here or click to upload</p>
        </div>
      </section>
      <img v-if="previewUrl" :src="previewUrl" alt="previewUrl" class="preview">
    </b-upload>
    <button :disabled="loading" type="submit" class="button is-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: null,
        tags: [],
        image: null
      },
      previewUrl: null,
      loading: false
    };
  },
  methods: {
    imageChange: function(file) {
      this.previewUrl = URL.createObjectURL(file);
    }
  }
};
</script>
