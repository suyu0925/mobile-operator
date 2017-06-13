export enum Type {
  ALL = 0,
  CMCC = 1,
  CUCC = 2,
  CTCC = 3,
  UNKNOWN = -1
}

export interface Operator {
  name: string
  short: string
  type: Type
}

export const CMCC: Operator
export const CUCC: Operator
export const CTCC: Operator
