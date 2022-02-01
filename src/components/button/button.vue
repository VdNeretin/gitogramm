<template>
  <button
  :class="['c-button', `theme-green`,
  {'hover-text': withHoverText}
  ]"
  :data-hover-text="hoverText"
  text="Follow" hover-text="Unfollow"
  >
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>
<style lang="scss" scoped src='./button.scss'></style>
