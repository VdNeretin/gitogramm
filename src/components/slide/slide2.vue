<template>
<div class="xSlide">
<div class="progress__top">
  <xProgress />
  <xUser />
</div>
<div class="description_slide">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?</p>
</div>
  <div class="button__buttom">
    <xButton class="xButton"/>
  </div>
  </div>
</template>

<script>
import { button as xButton } from '@/components/button'
import { progress as xProgress } from '@/components/progress'
import { user as xUser } from '@/components/user'

export default {
  components: {
    xButton, xProgress, xUser
  }
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>
