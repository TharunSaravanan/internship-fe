export interface IEnvironmentVariables {
  baseApiUrl: string;
  envId: string;
}

export interface IBootstrapSelectValues {
  id: number;
  name: string;
  disabled?: boolean;
}

export interface IErrorViewModel {
  message: string | null;
}
