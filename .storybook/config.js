import {
  configure
} from '@storybook/vue';

import {
  action
} from '@storybook/addon-actions';

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

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
