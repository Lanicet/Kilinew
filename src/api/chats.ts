import client from './client';
const endpoint = '/chats';

const getChats = () => client.get(endpoint);

const create = (data, onUploadProgress) =>
  client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
const findById = (id) => client.get(endpoint + '/' + id);
const deleteChat = (id) => client.delete(endpoint + '/' + id);
export default {
  create,
  getChats,
  findById,
  deleteChat,
};
