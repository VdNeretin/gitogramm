<template>
<div class="container">
  <div class="header">
    <button class="logo">
      <icon class="logo_slider" name="logo"/>
    </button>
    <button class="close__tab">
      <icon  name="close"/>
    </button>
  </div>
  <div class="slide">
   <div>
    <slide />
   </div>
  </div>
</div>
</template>

<script>
import { slide } from '../slide'
import { icon } from '@/icons'
export default {
  name: 'slider',
  components: {
    slide, icon
  }
}
</script>

<style lang="scss" scoped src="./slider.scss"></style>
