<template>
  <div class="c-story-post-item" :class=" { active }">
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <x-progress :active="active" @onFinish="$emit('onProgressFinish')"/>
        </div>
        <div class="user">
          <user :username="data.username" :src="data.userAvatar" />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
       <div class="button__buttom">
    <xButton class="xButton"/>
  </div>
    </div>
    <template v-if="active">
            <button v-if="btnsShown.incluedes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
        <span class="icon">
          <icon name="arrow"/>
        </span>
      </button>
      <button v-if="btnsShown.incluedes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
        <span class="icon">
          <icon name="arrow"/>
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { user } from '../user'
import { button } from '../button'
import { progress } from '../progress'
import { icon } from '../../icons'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'

export default {
  name: 'StoryUserItem',
  components: {
    user,
    xButton: button,
    xProgress: progress,
    icon,
    placeholder,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped src="./slide.scss">
</style>
