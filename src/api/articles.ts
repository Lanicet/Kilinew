import { IArticle, ISearch } from './../constants/types/index';
import client from './client';

const endpoint = '/articles';

const getArticles = () => client.get(endpoint);

export const addArticle = (article:IArticle, onUploadProgress:()=>number) => {
  const data = new FormData();
  data.append("title", article.title);
  data.append("price", article.price);
  data.append("categoryId", article.categoryId);
  data.append("userId", article.userId);
  data.append("description", article.description);
  data.append("supplier", article.supplier);
  data.append("location", JSON.stringify(article.location));

  article.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  return client.post(endpoint, data, {
    onUploadProgress: (progress:number) => onUploadProgress(progress.loaded / progress.total),
  });
};
const getArticle = (id:number) => {
  return client.get(endpoint + '/' + id, {
    onUploadProgress: (progress:number) => onUploadProgress(progress.loaded / progress.total),
  });
};
const updateArticle = (article, onUploadProgress) => {
  const data = new FormData();
  data.append("title", article.title);
  data.append("price", article.price);
  data.append("categoryId", article.category.id);
  data.append("userId", article.userId);
  data.append("description", article.description);
  data.append("supplier", article.supplier);
  data.append("location", JSON.stringify(article.location));

  article.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
 
  return client.put(endpoint + '/' + article.id, data, {
    onUploadProgress: (progress:any) => onUploadProgress(progress.loaded / progress.total),
  });
};
const deleteArticle = (id:number) => {
  return client.delete(endpoint + '/' + id);
};
const search = (data:ISearch) => {

  return client.get(`search?q=${data?.q}&orderBy=${data?.orderBy}&gte=${data.gte ? parseInt(data?.gte) : ''}&lte=${data?.lte ? parseInt(data?.lte) : ''}&categoryId=${ data?.categoryId ? parseInt(data?.categoryId) : ''}`);
};
const findByUser = (id:number) => {
  return client.get("my/"+endpoint + `?id=${id}`);
};
export default {
  deleteArticle,
  addArticle,
  getArticles,
  getArticle,
  updateArticle,
  search,
  findByUser,
};
