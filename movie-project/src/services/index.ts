const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzcxZWY2NGIzMTE3YmNkNjQ2YzE2N2IxZWE5ODgzYyIsIm5iZiI6MTczNTQwMzAyMC4zMzYsInN1YiI6IjY3NzAyNjBjYWE4ZjMxNTlkNjEyZTRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wqbZi1Xo8rDAnQ07sU9OVOPRDkaKA4AtNsNgX9Qdlcw';

export async function getMovies(page: number) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
      // 'data.results' is an array of movie objects
      data.results.forEach(movie => {
        console.log(`Title: ${movie.title}, Popularity: ${movie.popularity}`);
      });
      return data
    })
    .catch(error => {
      console.error('Error fetching popular movies:', error);
    });
}

