import axios from "axios";
import {BaseUrl} from './Constants/constants'
const instance = axios.create({

    baseURL:BaseUrl}
  );
export default instance