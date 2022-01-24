import topline from './topline.vue'

export default {
  title: "topline",
  component: {topline}
};

const template = args => ({
  components: {
    topline
  },
  data() {
    return {
      args
    }
  },
  template: `
  <topline/>
  `
});

export const Default = template.bind(template);
