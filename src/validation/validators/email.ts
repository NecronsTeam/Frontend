import { GetValidator } from "..";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailValidator: GetValidator<string, string> = (
  message = "Введите корректный email"
) => {
  return async (value) => emailRegex.test(value) ? null : message;
}