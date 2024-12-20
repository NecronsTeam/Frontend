import { GetValidator } from "..";

const telegramRegex = /^@[a-zA-Z0-9_]{5,}$/;

export const telegramValidator: GetValidator<string, string> = (
  message = "Логин для Telegram начинается с символа: @"
) => {
  return async (value) => telegramRegex.test(value) ? null : message;
}