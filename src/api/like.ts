import client from './client';

const endpoint = '/likes';
const getLikes = () => client.get(endpoint);
const addLike = (data, onUploadProgress) =>
  client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });

export default {
  addLike,
  getLikes,
};
