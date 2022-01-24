<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="menu">
          <ul class="menu__list">
            <li class="menu__item title">
             <h1>Gitogram /</h1>
            </li>
            <li class="menu__item">
          <icon name="home" class="home__main" />
            </li>
            <li class="menu__item">
            <div class="avatar">
    <img class="avatar__img main__pg" src="https://picsum.photos/30/30" />
              </div>
            </li>
            <li class="menu__item">
          <icon name="exit" class="home__main" />
            </li>
          </ul>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
        :avatar="story.avatar"
        :username="story.username"
        @onPress="handlePress(story.id)"
        />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="posts-container">
    <ul class="posts__list">
      <li v-for="item, ndx in 5" :key="ndx" class="posts__item">
        <post>
          <template #card >
            <card />
          </template>
        </post>
      </li>
    </ul>
  </div>
  <div class="x-container">
    <ul class="list">
      <li class="item" v-for="item in items" :key="item.id">
        <feed
        :feed="getFeedData(item)"
        dark
        />
      </li>
    </ul>
    <pre>{{items}}</pre>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { post } from '@/components/post'
import { card } from '@/components/card'
import { icon } from '@/icons'
import * as api from '@/api'
import { feed } from '@/components/feed'
export default {
  name: 'feeds',
  components: {
    topline, storyUserItem, post, card, icon, feed
  },
  data () {
    return {
      stories,
      shown: false,
      items: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
    getFeedData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count
      }
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
