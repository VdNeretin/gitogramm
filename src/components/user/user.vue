<template>
  <div class="user">
    <Avatar class="user__avatar" :src="src" :size="size"/>
    <div>
      <div class="user__name">{{ username }}</div>
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
    username: {
      type: String,
      default: 'John Doe'
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 's'
    },
    src: {
      type: String,
      required: true
    }
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss" scoped src="./user.scss"></style>
