import { AxiosInstance } from 'axios'
export default class HelperMethods {
  public static isNullOrUndefined (object: any): boolean {
    return object === null || typeof object === 'undefined'
  }

  /**
   * Simple object check.
   * @param item
   * @returns {boolean}
   */
  public static isObject (item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item)
  }

  /**
   * global Error Call
   * @param error
   * @returns {void}
   */
  public static catch (axios: AxiosInstance, error: any, sendLog: boolean = true, logSilently: boolean = false): void {
    // eslint-disable-next-line no-console
    console.error(error)
    // Handle the error gracefully here.
  }

  public static getErrorStatus (error: any): string {
    throw error.response && error.response.data && error.response.data.status ? error.response.data.status : 'other'
  }

  public static isStringEmpty (string: string): boolean {
    return string === null || typeof string === 'undefined' || string.trim() === ''
  }

}