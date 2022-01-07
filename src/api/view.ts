import client from './client';

const endpoint = '/views';

const addView = (data, onUploadProgress) =>
  client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
const findByUser = (data) => {
  return client.get(endpoint + `?user.id=${data}`);
};
export default {
  addView,
  findByUser,
};
