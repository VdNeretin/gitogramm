<template>
  <div class="user">
    <Avatar class="user__avatar" :avatar="src" :size="size"/>
    <div>
      <div class="user__name">{{ name }}</div>
      <div v-if="type" class="user__type">{{ type }}</div>
    </div>
  </div>
</template>

<script>
import { avatar as Avatar } from '../../components/avatar'

export default {
  name: 'user',
  components: {
    Avatar
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 's'
    }
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss" scoped src="./user.scss"></style>
