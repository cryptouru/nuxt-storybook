
<script>
import Counter from "./Counter";
export default {
  name: "Counters", // vue component name
  components: {
    Counter
  },
  data() {
    return {
      counters: []
    };
  },
  props: {
    data: Array
  },
  mounted() {
    console.log("test");
    console.log(this);
    console.log(typeof this.data);
    console.log(this.data);
    if (globalCounters) {
      this.counters = globalCounters;
      console.log(this.counters);
      console.log(globalCounters);
    }
  }
};
</script>

<template>
  <div class="counter">
    <counter :name="'happy counter'"/>
    <counter :name="'sad counter'"/>
    <counter/>
    <!-- <counter v-for="counter of test" v-bind:key="counter" :name="counter"/> -->
  </div>
</template>