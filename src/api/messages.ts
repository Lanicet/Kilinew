import client from './client';

const endpoint = '/messages';

const getMessages = () => client.get(endpoint);
const send = (data, onUploadProgress) =>
  client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });

export default {
  send,
  getMessages,
};
