import { NAME } from './constants'

export const createNamespace = (id: string) => {
  return `${NAME}:${id}`
}
