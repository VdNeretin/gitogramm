<template>
  <div class="post" v-for="item in items" :key="item.id">
    <div class="post__user">
        <user :name="item.owner.login"/>
    </div>
    <div class="post__card">
      <slot name="card" />
      <card :title="item.name"
      :text="item.description"
      />
    </div>
  <div class="feed">
    <feed />
  </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { card } from '../../components/card'
import { feed } from '../../components/feed'
import * as api from '../../api'

export default {
  name: 'post',
  components: {
    user, card, feed
  },
  props: ['name'],
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src='./post.scss'></style>
