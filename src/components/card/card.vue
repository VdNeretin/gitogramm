<template>
  <div class="card" v-for="item in items" :key="item.id">
    <div class="card__title_wrap">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__desc">
    <p v-if="text">{{ text }}</p>
    </div>
    <div class="card__stats">
      <stats :stars="item.stargazers_count"
       :forks="item.forks_count" />
    </div>
  </div>
</template>

<script>
import { stats } from '../../components/stats'
import * as api from '../../api'

export default {
  name: 'card',
  components: {
    stats
  },
  data () {
    return {
      items: []
    }
  },
  props: {
    title: String,
    text: String
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

<style lang="scss" scoped src='./card.scss'></style>
