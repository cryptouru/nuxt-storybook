import Vue from 'vue';
import {
  action
} from "@storybook/addon-actions"

import {
  storiesOf
} from '@storybook/vue';

import Logo from '../components/Logo.vue';
import Header from '../components/Header.vue';
import CreateForm from '../components/CreateForm.vue';

export const methods = {
  log: action("log"),
  logout: action("logout")
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

storiesOf('CreateForm', module)
  .addDecorator(paddedList)
  .add('story as a component', () => ({
    components: {
      CreateForm
    },
    template: '<CreateForm @handleSubmit="log"></CreateForm>',
    methods
  }));

storiesOf('Header', module)
  .add('Logged out', () => ({
    components: {
      Header
    },
    template: '<Header/>',
    methods
  }))
  .add('Logged in', () => ({
    components: {
      Header
    },
    template: '<Header :username="username" @logout="logout" />',
    data: () => ({
      username: 'Mikel'
    }),
    methods
  }));
