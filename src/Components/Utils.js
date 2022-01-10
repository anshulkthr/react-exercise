import axios from "axios";

const toQueryString = (object) =>
  Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join("&");

export const Search = ({ keywords = "paris", mediaType, yearStart }) => {
  const queryObject = {};

  if (keywords) {
    queryObject.q = keywords;
  }

  if (mediaType) {
    queryObject.media_type = mediaType;
  }

  if (yearStart) {
    queryObject.year_start = yearStart;
  }

  return axios.get(
    `https://images-api.nasa.gov/search?${toQueryString(queryObject)}`
  );
};
