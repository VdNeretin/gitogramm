import storyUserItem from './storyUserItem.vue'

export default {
  title: "storyUserItem",
  component: {storyUserItem}
};

const template = args => ({
  components: {
    storyUserItem
  },
  data() {
    return {
      args
    }
  },
  template: `
  <storyUserItem/>
  `
});

export const Default = template.bind(template);
