import { makeRequest } from "../requests";

const addStatringZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams();
  const weekMS = 7 * 24 * 60 * 60 * 1000; 
  const weekAgo = new Date(Date.now() - weekMS)

  const formattedDate = [
    weekAgo.getFullYear(),
    addStatringZero(weekAgo.getMonth() + 1),
    addStatringZero(weekAgo.getDate())
  ].join("-")

  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("per_page", 10);
  params.append('q', `lenguage:${lang} created:>${formattedDate}`);


  return makeRequest({
    url: `/search/repositories?${params}`
  }) 
}
