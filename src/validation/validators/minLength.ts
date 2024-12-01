import { GetValidator } from "..";

export const minLength: GetValidator<number, string> = (
  length
) => {
  return async (value) => (value.length >= length ? null : `Минимальное количество символов: ${length}`)
}