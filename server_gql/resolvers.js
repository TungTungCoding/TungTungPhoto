import {
  getPhotos,
  getCategorys,
  getById,
  getByCategory,
  deletePhoto,
  addPhoto,
} from "./db";

const resolvers = {
  Query: {
    getPhotos: () => getPhotos(),
    getCategorys: () => getCategorys(),
    getById: (_, { id }) => getById(id),
    getByCategory: (_, { category }) => getByCategory(category),
  },
  Mutation: {
    deletePhoto: (_, { id }) => deletePhoto(id),
    addPhoto: (_, { url, category, tag, date }) =>
      addPhoto(url, category, tag, date),
  },
};

export default resolvers;
