import { button } from './button.vue'

export default {
  title: "button",
  component: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text ',
    }
    }
  }
}

const templaete  = (args) =>({
  components: {xButton: button},
  data (){
    return { args }
  },
  templaete: `
  <x-button v-bind="args">Following</x-button>
  `
});

export const Default = templaete.bind({});

Default.args = {
  hoverText: "Unfollow"
}