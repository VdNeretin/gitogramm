<template>
  <div class="card">
    <div class="card__title_wrap">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__desc">
    <p v-if="description">{{ description }}</p>
    </div>
    <div class="card__stats">
      <stats
      :stars="stars"
      :forks="forks" />
    </div>
  </div>
</template>

<script>
import { stats } from '../../components/stats'

export default {
  name: 'card',
  components: {
    stats
  },
  props: ['title', 'description', 'stars', 'forks']
}
</script>

<style lang="scss" scoped src='./card.scss'></style>
