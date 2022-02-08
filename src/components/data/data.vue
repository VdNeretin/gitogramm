<template>
  <div class="c-feed">
  {{ title }}
  {{ username }}
  {{ stars }}
    <p v-if="description">description: {{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'data',
  props: {
    title: String,
    username: {
      type: String,
      required: true
    },
    stars: Number,
    description: String
  }
}
</script>

<style lang="scss" scoped src="./data.scss">

</style>
