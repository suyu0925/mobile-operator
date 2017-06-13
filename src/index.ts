'use strict'

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

export const CMCC: Operator = {
  name: '中国移动',
  short: '移动',
  type: Type.CMCC
}

export const CUCC: Operator = {
  name: '中国联通',
  short: '联通',
  type: Type.CUCC
}

export const CTCC: Operator = {
  name: '中国电信',
  short: '电信',
  type: Type.CTCC
}
