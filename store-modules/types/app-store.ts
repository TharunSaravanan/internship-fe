import { IEnvironmentVariables } from "~/view-models";

export interface IAppStore {
  // State
  env: IEnvironmentVariables;
  // Getters
  // Mutations
  setEnv(config: IEnvironmentVariables): void;
  // Actions
}
