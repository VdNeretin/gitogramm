<template>
  <div class='user'>
    <avatar calss='user__avatar img' :avatar='src' :size='size'/>
    <div>
      <div class='user__name'>{{ name }}</div>
      <div v-if='type' class='user__type'>{{ type }}</div>
    </div>
  </div>
</template>

<script>
import { avatar as Avatar } from '@/components/avatar'
export default {
  components: {
    Avatar
  },
  props: {
    src: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    name: {
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
    }
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.user{
  display: flex;
  align-items: center;
  border-radius: 50%;

  &__name{
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 18px;
  }

  &__avatar{
    display: block;
     border-radius: 50%;
    margin-right: 12px;
  }

  &__type{
    font-size: 12px;
    color: #9e9e9e;
  }
}

.img{
  display: block;
   border-radius: 50%;
}
</style>
