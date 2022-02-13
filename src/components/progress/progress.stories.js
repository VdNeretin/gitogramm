import progress from './progress.vue'

export default {
  title: 'progress',
  component: progress,
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "запускается когда полностью заполняется прогресс"
    }
  }
}

const template = (args) => ({
  components: {xProgress: progress},
  data () {
    return { args }
  },
  template: '<x-progress @onFinish = "args.onFinish"/>'
})

export const Default = template.bind({})