<template>
  <div class="post">
    <div class="post__user">
      <user src="https://picsum.photos/300/300" name="user name"/>
    </div>
    <div class="post__card">
      <slot name="card" />
    </div>
    <toggler @onToggle="clickToggle" />
    <div v-if="showCom">
      <ul class="post__comment comment__list">
        <li class="comment__item" v-for="item in 5" :key="item">
          <p>
            <span class="comment__user">User name</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolore
            adipisci repellendus asperiores velit maxime.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { user } from '@/components/user'
import { toggler } from '@/components/toggler'
export default {
  components: {
    user, toggler
  },
  data () {
    return {
      showCom: false
    }
  },
  methods: {
    clickToggle (state) {
      this.showCom = state
    }
  }
}
</script>

<style lang="scss" scoped>
.comment{
  &__user{
    font-weight: 600;
  }
}

.post__user{
  margin-bottom: 16px;
}
</style>
