import { getApiResponse } from "../lib/request";

export async function fetchTrending() {
  const data = await getApiResponse("/trending/movie/week");
  const trending = await data.results;
  return trending;
}

export async function fetchGenreMovie() {
  const data = await getApiResponse("/genre/movie/list");
  const genres = data.genres;

  for (const genre of genres) {
    const data = await getApiResponse(
      `/discover/movie?include_adult=false&with_genres=${genre.id}`
    );
    genre.move = data.results;
  }

  return genres;
}
