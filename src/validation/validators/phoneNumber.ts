import { GetValidator } from "..";

const phoneNumberRegex = /(?:\+|\d)[\d\-\(\) ]{9,}\d/;

export const phoneNumberValidator: GetValidator<string, string> = (
  message = "Введите корректный номер телефона"
) => {
  return async (value) => phoneNumberRegex.test(value) ? null : message;
}