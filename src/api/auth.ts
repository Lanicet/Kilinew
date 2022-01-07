import { ILocation } from './../constants/types/index';
import client from './client';

const login = (login:ILocation) => client.post('/auth', login);

export default {
  login,
};
