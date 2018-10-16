// Code goes here
const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
const titles = ['Mad Max: Fury Road']


ReactDOM.render(
  <MovieCard
    title={titles}
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={madMaxGenres}
  />,
  document.getElementById('root')
);
