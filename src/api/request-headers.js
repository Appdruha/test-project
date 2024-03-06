import { createMd5String } from '../helpers/create-md5-string.js'

const md5String = createMd5String(
  `${import.meta.env.VITE_API_PASSWORD}_${new Date().toISOString().split('T')[0].replaceAll('-', '')}`,
)

export const jsonRequestHeaders = {
  Accept: 'application/json',
  'X-Auth': md5String,
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': 'true',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
}