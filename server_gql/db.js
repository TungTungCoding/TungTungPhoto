import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export const getPhotos = async () => {
  const result = await axios.get(BASE_URL + "photos/list");
  return result.data;
};

export const getById = async (id) => {
  const result = await axios.get(BASE_URL + "photos/filter_id", {
    params: {
      id,
    },
  });
  return result.data;
};

export const getByCategory = async (category) => {
  const result = await axios.get(BASE_URL + "photos/filter_category", {
    params: {
      category,
    },
  });
  return result.data;
};

export const addPhoto = async (url, category, tag, date) => {
  const result = await axios.post(BASE_URL + "photos/add", {
    url,
    category,
    tag,
    date,
  });
  return result.data;
};

export const deletePhoto = async (id) => {
  const result = await axios.delete(BASE_URL + "photos/delete", {
    params: {
      id,
    },
  });
  return result.data;
};

export const getCategorys = async () => {
  const result = await axios.get(BASE_URL + "category/list");
  return result.data;
};
