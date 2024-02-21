import { getApiResponse } from "../lib/request";

export async function fetchTrending() {
  const data = await getApiResponse("/trending/movie/week");
  const trending = await data.results;
  return trending;
}
