/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'redux/actions' {

  export function setInteractiveData(data: any): any;
  export function setLevel(): any;
  export function updateInteractiveData(type: string): any;

}