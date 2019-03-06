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

// Setup custom styles and component library
import "../assets/theme.scss"
import Buefy from 'buefy'

import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/css/fontawesome.css"

Vue.use(Buefy, {
  defaultIconPack: "fas"
})


function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
