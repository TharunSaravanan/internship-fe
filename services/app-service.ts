/* eslint-disable no-return-await */
import { AxiosInstance, AxiosResponse } from 'axios';
import BaseService from './base-service';

export default class AppService extends BaseService {
  constructor(axios: AxiosInstance) {
    super('internship', axios);
  }

  //API end point should be called from here
  public async getInternships(): Promise<any[]> {
    return await this.http
      .get(this.getUrl('getAll'))
      .then((response: AxiosResponse<any[]>) => response.data);
  }

}
