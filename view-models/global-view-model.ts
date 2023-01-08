export interface IEnvironmentVariables {
  baseApiUrl: string;
  envId: string;
  fb_apiKey: string;
  fb_authDomain: string;
  fb_projectId: string;
  fb_storageBucket: string;
  fb_messagingSenderId: string;
  fb_appId: string;
  fb_measurementId: string;
}

export interface IBootstrapSelectValues {
  id: number;
  name: string;
  disabled?: boolean;
}

export interface IErrorViewModel {
  message: string | null;
}
