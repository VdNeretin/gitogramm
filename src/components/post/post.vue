<template>
<div class="post-container">
  <div class="post">
    <div class="post__user">
        <user
        :username="username"
        :src="src"
        />
    </div>
    <div class="post__card">
      <slot name="card" />
      <card
      :title="title"
      :description="description"
      :stars="stars"
      :forks="forks"
      />
    </div>
  <div class="feed">
    <feed />
  </div>
  </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { card } from '../../components/card'
import { feed } from '../../components/feed'

export default {
  name: 'post',
  components: {
    user, card, feed
  },
  props: ['username', 'src', 'title', 'description', 'stars', 'forks']
}
</script>

<style lang="scss" scoped src='./post.scss'></style>
