
<script>
export default {
  name: "Counter", // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5
    };
  },
  props: {
    name: {
      type: String,
      default: "default Name"
    }
  },
  methods: {
    handleEmmit: function(counter) {
      window.eventBus.$emit("customStuff", {
        message: "I emmit from " + this.name,
        counter
      });
    }
  }
};
</script>

<template>
  <div class="counter">
    <p>
      The counter is set to
      <b>{{counter}}</b>.
    </p>
    <button @click="counter += 1">Click +1</button>
    <button @click="counter -= 1">Click -1</button>
    <button @click="counter = initCounter">Reset</button>
    <button @click="handleEmmit(counter)">Emmit</button>
  </div>
</template>

<style scoped>
.counter {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.counter p {
  margin: 0 0 1em;
}
</style>
