import md5 from 'md5'

export const createMd5String = (string) => {
  return md5(string)
}