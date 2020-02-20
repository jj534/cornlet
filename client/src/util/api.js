import axios from 'axios';
import cfg from 'src/config';

const url = process.env.NODE_ENV === 'development' ? cfg.BASE : cfg.BASE_PROD;

export default axios.create({
  baseURL: url
});
