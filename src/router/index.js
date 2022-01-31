import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GiphyView from '@/views/GiphyView.vue'
import MovieView from '@/views/MovieView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import WeatherView from '@/views/WeatherView.vue'
import BreakingBadView from '@/views/BreakingBadView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/giphy',
    name: 'Giphy',
    component: GiphyView
  },
  {
    path: '/movie',
    name: 'Movie',
    component: MovieView
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path: '/breaking-bad',
    name: 'BreakingBad',
    component: BreakingBadView
  },
  {
    path: '/:catchAll(.*)*',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
