import Vue from 'vue';
import {
  action
} from "@storybook/addon-actions"

import {
  storiesOf
} from '@storybook/vue';

import Logo from '../components/Logo.vue';

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
