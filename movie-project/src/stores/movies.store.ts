import { getMovies } from "@/services"
import { defineStore } from "pinia"

export const useCounterStore = defineStore('movies', {
  state: () => ({
    page: 1,
    loadingMovies: false,
    titles: new Map<string, {ids: number}>(),
    movies: new Map<number, {
      title: string,
      info: string,
      image: string,
      releaseDate: Date
    }>()
  }),
  actions: {
    getMovies() {
      this.loadingMovies = true
      const movies = getMovies(this.page)
      if (movies)
      movies.forEach((movie) => {

      })

      this.page++

      
    },
  },
})