<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="headline">
          <div class="icon__logo">
            <icon name="logo"/>
          </div>
          <ul class="menu__item">
            <li class="menu__list">
              <button class="home">
                <icon name="home"/>
              </button>
            </li>
            <li class="menu__list">
              <div class="menu__avatar">
                <img class="avatar__foto" src="https:/picsum.photos/300/300"/>
              </div>
            </li>
            <li class="menu__list">
              <button class="exit">
                <icon name="exit"/>
              </button>
            </li>
          </ul>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
             <storyUserItem
        :avatar="story.avatar"
        :username="story.username"
        @onPress="handlePress(story.id)"
        />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <!-- <div>
   <Data v-for="item in items" :key="item.id"
        :title="item.name"
        :description="item.description"
        :username="item.owner.login"
        :stars="item.stargazes_count"
        />
        </div> -->
</template>

<script>
import { storyUserItem } from '../../components/storyUserItem'
import { topline } from '../../components/topline'
import stories from './data.json'
import { icon } from '../../icons'
import * as api from '@/api'
// import { data as Data } from '../../components/data'

export default {
  name: 'feeds',
  components: {
    topline, storyUserItem, icon
  },
  data () {
    return {
      stories,
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

<style lang="scss" scoped src="./feeds.scss"></style>
