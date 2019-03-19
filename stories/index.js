import Vue from 'vue';
import {
  action
} from "@storybook/addon-actions"

import {
  storiesOf
} from '@storybook/vue';

import Logo from '../components/Logo.vue';
import SignUp from '../components/SignUp.vue';

export const methods = {
  log: action("log"),
};

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>'
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
  .add('story as a component', () => ({
    components: {
      SignUp
    },
    template: '<SignUp @vote="log"></SignUp>',
    methods
  }));
