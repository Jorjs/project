
<template>
  <v-app >
    <main style="background-color: #952175">
      <AppMenu/>
      <MovieCard title: movieTitle image:  />
    </main>
  </v-app>
</template>

<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue';
  import AppMenu from '../components/AppMenu.vue'

  const movieInfo = 'adssdad';
  const movieTitle = 'asdds';
  const rea
</script>






<script setup lang="ts">
import { ref, onMounted } from 'vue'

const allItems = Array.from({ length: 100 }, (_, i) => `Card #${i + 1}`)
const PAGE_SIZE = 20
const visibleItems = ref(allItems.slice(0, PAGE_SIZE))

function onScroll() {
  // If near bottom of page, load more
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadMore()
  }
}

function loadMore() {
  if (visibleItems.value.length < allItems.length) {
    const newLength = visibleItems.value.length + PAGE_SIZE
    visibleItems.value = allItems.slice(0, newLength)
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in visibleItems"
        :key="i"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card>
          <v-card-text>
            {{ item }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
