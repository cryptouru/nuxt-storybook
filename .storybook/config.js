import {
  configure,
  addParameters
} from '@storybook/vue';

import {
  action
} from '@storybook/addon-actions';

const viewportOptions = {
  defaultViewport: "iphone6"
}

addParameters({
  viewport: viewportOptions
});

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins
// Install Vue plugins.
// Vue.use(Vuex);

// router-link missing component workaround
Vue.component('RouterLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a @click="log()"><slot>RouterLink</slot></a>',
})
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
Vue.use(Buefy)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
