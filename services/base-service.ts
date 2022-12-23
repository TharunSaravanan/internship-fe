import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {
  private prefix: string = '';
  protected http: AxiosInstance;

  constructor(prefix: string, http: AxiosInstance) {
    this.prefix = prefix;
    this.http = http;
  }

  protected getUrl(action: string): string {
    return `${this.prefix}/${action}`;
  }

  protected getData<T>(action: string, config?: AxiosRequestConfig): Promise<T> {
    return this.http.get(this.getUrl(action), config).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  }

  protected deleteData<T>(action: string): Promise<T> {
    return this.http.delete(this.getUrl(action)).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  }

  protected postData<T, P>(action: string, payload: P, config?: AxiosRequestConfig): Promise<T> {
    return this.http.post(this.getUrl(action), payload, config).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  }

  protected putData<T, P>(action: string, payload: P, config?: AxiosRequestConfig): Promise<T> {
    return this.http.put(this.getUrl(action), payload, config).then((response: AxiosResponse<T>) => {
      return response.data;
    });
  }
}
