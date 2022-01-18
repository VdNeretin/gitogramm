<template>
  <button :class="['button', {active: isOpened}]" @click="onToggle">
    <span class="text">{{isOpened ? "Hide" : "Show"}} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  setup () {
    return {}
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    onToggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
