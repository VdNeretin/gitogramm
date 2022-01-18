<template>
  <div class="posts-container">
    Post page
    <ul class="posts__list">
      <li v-for="item, ndx in 5" :key="ndx" class="posts__item">
        <post>
          <template #card >
            <card />
          </template>
        </post>
      </li>
    </ul>
  </div>
</template>

<script>
import { post } from '@/components/post'
import { card } from '@/components/card'
export default {
  components: {
    post, card
  }
}
</script>

<style lang="scss" scoped>
.posts{
  &-container{
    width: 979px;
    margin: 0 auto;
  }

  &__item{
    margin-bottom: 20px;
  }
}
</style>
