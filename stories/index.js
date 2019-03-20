import Vue from 'vue';
import {
  action
} from "@storybook/addon-actions"

import {
  storiesOf
} from '@storybook/vue';

import Logo from '../components/Logo.vue';
import SignUp from '../components/SignUp.vue';
import Card from '../components/Card.vue';

export const methods = {
  log: action("log"),
};

const paddedList = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>'
  };
};

storiesOf('Logo', module)
  .addDecorator(paddedList)
  .add('story as a component', () => ({
    components: {
      Logo
    },
    template: '<logo @vote="log"></logo>',
    methods
  }));

storiesOf('SignUp', module)
  .addDecorator(paddedList)
  .add('Normal form', () => ({
    components: {
      SignUp
    },
    template: '<SignUp @submit="log"></SignUp>',
    methods
  }))
  .add('Loading form', () => ({
    components: {
      SignUp
    },
    template: '<SignUp @submit="log" :loading="true"></SignUp>',
    methods
  }));;

storiesOf('Card', module)
  .addDecorator(paddedList)
  .add('Vanilla', () => ({
    components: {
      Card
    },
    template: '<Card/>',
    methods
  })).add('Loading', () => ({
    components: {
      Card
    },
    template: '<Card :loading="true"/>',
    methods
  }));
