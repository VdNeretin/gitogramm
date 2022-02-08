<template>
<div class="x-container">
  <div class="posts-container">
    <ul class="posts__list">
      <li v-for="item, ndx in 1" :key="ndx" class="posts__item">
        <post/>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import { post } from '../../components/post'

export default {
  name: 'posts',
  components: {
    post
  }
}
</script>

<style lang="scss" scoped src="./posts.scss"></style>
