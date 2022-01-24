<template>
  <div class="c-feed" :class="{dark}">
    <h1>title: {{ feed.title }}</h1>
    <h2>owner: {{ feed.username }}</h2>
    <h3>stars: {{ feed.stars }}</h3>
    <p v-if="description">description: {{ feed.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'feed',
  props: {
    feed: Object,
    // title: String,
    // username: String,
    // stars: Number,
    // description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped src="./feed.scss">

</style>
