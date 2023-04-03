import axios from 'axios';
//import config from '../config.js';

export default axios.create({
  baseURL: 'https://back-api-blog-production.up.railway.app/'
  //baseURL: 'http://localhost:5000'  //Con proxy en package.json, "proxy": "http://localhost:5000/"
});
