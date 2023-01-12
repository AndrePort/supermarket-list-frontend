import axios from 'axios'
import { SAVE_USERNAME_PAHT } from '../../services/constants'

export const api = axios.create({
  baseURL: 'https://supermarketlist-api.herokuapp.com',
  headers: {
    username: localStorage.getItem(SAVE_USERNAME_PAHT) || "",
  },
});