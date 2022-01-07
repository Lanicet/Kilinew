import client from './client';
const endpoint = '/change_passwords';

const changepassword = (email, onUploadProgress) =>
  client.post(endpoint, email, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });

export default {
  changepassword,
};
