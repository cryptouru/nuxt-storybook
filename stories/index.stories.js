import Vue from 'vue';
import {
  action
} from "@storybook/addon-actions"
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';

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
  .addDecorator(withKnobs)
  .addDecorator(paddedList)
  .add('Normal form', () => ({
    components: {
      SignUp
    },
    template: '<SignUp @submit="log" :loading="loading"></SignUp>',
    methods,
    props: {
      loading: {
        default: boolean('Loading', false)
      }
    }
  }))
  .add('Loading form', () => ({
    components: {
      SignUp
    },
    template: '<SignUp @submit="log" :loading="true"></SignUp>',
    methods
  }));;

const cardProps =
  storiesOf('Card', module)
  .addDecorator(paddedList)
  .addDecorator(withKnobs)
  .add('Vanilla', () => ({
    components: {
      Card
    },
    template: '<Card :text="text" :date="date" :author="author" :user="user" :image="image" :thumb="thumb" />',
    methods,
    props: {
      text: {
        default: text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.')
      },
      date: {
        default: new Date()
      },
      author: {
        default: text('author', 'John Smith')
      },
      user: {
        default: text('user', '@johnsmith')
      },
      image: {
        default: text('image', 'https://via.placeholder.com/728x430.png')
      },
      thumb: {
        default: text('thumb', 'https://via.placeholder.com/90')
      }
    }
  })).add('Loading', () => ({
    components: {
      Card
    },
    template: '<Card :text="text" :date="date" :author="author" :user="user" :image="image" :thumb="thumb" :loading="true" />',
    methods,
    props: {
      text: {
        default: text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.')
      },
      date: {
        default: new Date()
      },
      author: {
        default: text('author', 'John Smith')
      },
      user: {
        default: text('user', '@johnsmith')
      },
      image: {
        default: text('image', 'https://via.placeholder.com/728x430.png')
      },
      thumb: {
        default: text('thumb', 'https://via.placeholder.com/90')
      }
    }
  }));
