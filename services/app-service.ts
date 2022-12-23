/* eslint-disable no-return-await */
import { AxiosInstance, AxiosResponse } from 'axios';
import BaseService from './base-service';

export default class AppService extends BaseService {
  constructor(axios: AxiosInstance) {
    super('api', axios);
  }

  //API end point should be called from here
}
