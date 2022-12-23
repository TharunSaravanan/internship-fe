export interface IEnvironmentVariables {
  baseApiUrl: string;
  envId: string;
}



export interface IBootstrapSelectValues<T> {
  value: T;
  text: string;
  disabled?: boolean;
}

export interface IErrorViewModel {
  message: string | null;
}
