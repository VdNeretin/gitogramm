<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo">
          <logo white />
        </button>
        <button class="close-btn">
         <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import { icon } from '@/icons'
import { storiesSlider } from '@/storiesSlider'
export default {
  components: icon, storiesSlider
}
</script>