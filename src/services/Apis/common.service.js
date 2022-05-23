import config from '../config';
import {Delete, get, patch, post, put} from '../helpers/http-handler';

// auth

export const getTodos = () => get(`${config.API_URL}/todos`);
