import { photos } from "./db";

export const getPhotos = () => photos;

export const getByCategory = (category) => {
  return photos.filter((photo) => photo.category == category);
};

export const getById = (id) => {
  return photos.filter((photo) => photo.id == id)[0];
};

export const addPhoto = (body) => {
  const { url, category, tag } = body;
  let { date } = body;

  if (date === undefined) {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    date = [year, month, day].join("-");
  }

  const newPhoto = {
    id: photos[photos.length - 1].id + 1,
    url,
    category,
    tag,
    date,
  };
  photos.push(newPhoto);
  return newPhoto;
};

export const deletePhoto = (id) => {
  const deletePhoto = photos.filter((photo) => photo.id == id)[0];
  const idx = photos.indexOf(deletePhoto);

  let message;
  if (idx > -1) {
    photos.splice(idx, 1);
    message = `id ${id} is deleted`;
  } else {
    message = `id ${id} can not found`;
  }

  return { message: message };
};
