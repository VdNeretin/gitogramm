import avatar from './Avatar.vue'

export default {
  title: "UI/avatar",
  component: {avatar},
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["s", "m", "l"]
    }
  }
};

const template = args => ({
  props: Object.keys(args),
  components: {
    avatar
  },
  data() {
    return {
      args
    }
  },
  template: `
  <avatar :avatar="args.avatar" :size="args.size"/>
  `
});

export const Default = template.bind(template);

Default.args = {
  avatar: "http://picsum.photos/300/300",
  size: "l"
}