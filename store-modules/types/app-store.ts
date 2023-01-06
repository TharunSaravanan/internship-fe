import { IBootstrapSelectValues, IEnvironmentVariables } from "~/view-models";
import { IFilterRequestPayload, IInternship } from "~/view-models/internship-view-model";

export interface IAppStore {
  // State
  env: IEnvironmentVariables;
  arrInternships: IInternship[];
  allArrIntenships: IInternship[];
  ddPeriod: IBootstrapSelectValues[]
  ddQualification: IBootstrapSelectValues[];
  ddIndustries: IBootstrapSelectValues[];
  // Getters
  appService: any;
  getDDQualification: IBootstrapSelectValues[];
  getDDPeriod: IBootstrapSelectValues[]
  // Mutations
  setEnv(config: IEnvironmentVariables): void;
  setShowMoreLessDetails(internship: IInternship): void;
  filterInternshipList(filterObject: IFilterRequestPayload): void;
  setIndustries(internships: IInternship[]): void
  updateCurrentPageNumber(pageNumber: number): void
  
  // Actions
  getInternships(): Promise<void>;
}
