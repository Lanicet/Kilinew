import client from './client';

const endpoint = '/media_objects';

const getImages = () => client.get(endpoint);

export const addImage = (images, id, onUploadProgress) => {
  const data = new FormData();
  data.append('article', id);

  images.forEach((image, index) =>
    data.append('images', {
      name: image,
      type: 'image/jpeg',
      uri: image,
    })
  );
  return client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};
const deleteImage = (id) => {
  return client.delete(endpoint + '/' + id);
};
export default {
  deleteImage,
  addImage,
  getImages,
};
