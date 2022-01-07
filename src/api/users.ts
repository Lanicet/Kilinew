import client from './client';

const endpoint = '/users';
const register = (userInfo) => client.post(endpoint, userInfo);
const getUser = (id) => client.get(endpoint + '/' + id);
const updateUser = (user, onUploadProgress) => {
  return client.put(endpoint, user, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};
const deleteUser = (id) => client.delete(endpoint + '/' + id);
export default { register, updateUser, getUser, deleteUser };
