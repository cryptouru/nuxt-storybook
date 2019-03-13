
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
    countersArray: Array
  },
  mounted() {
    console.log(this.countersArray);
    if (
      typeof this.countersArray !== "object" &&
      typeof this.countersArray !== "undefined"
    ) {
      // Approach of passing it as a prop (will always be stringified) #1 - #2
      // https://github.com/vuejs/vue-web-component-wrapper/issues/33
      this.countersArray = JSON.parse(this.countersArray);
      console.log(this.countersArray);
    }
    var vm = this;
    eventBus.$on("loadCounters", function(data) {
      // Approach of loading data with event #3
      console.log(vm.counters);
      console.log(data);
      console.log("--- Loading counters ---");
      vm.counters = data.concat(vm.counters);
      console.log(vm.counters);
    });
  }
};
</script>

<template>
  <div class="counter">
    <counter :name="'preloaded counter'"/>
    <counter/>
    <counter v-for="counter of counters" v-bind:key="counter" :name="counter"/>
    <counter v-for="counter of countersArray" v-bind:key="counter" :name="counter"/>
  </div>
</template>