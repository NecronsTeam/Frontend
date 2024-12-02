import { GetValidator } from "..";

export const minLength: GetValidator<number, string> = (
  length = 1
) => {
  return async (value) => (value.length >= length ? null : `Минимальное количество символов: ${length}`)
}