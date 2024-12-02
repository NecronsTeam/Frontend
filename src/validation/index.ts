export type GetValidator<Options, Params> = (option?: Options) => Validator<Params>;

export type Validator<T> = (params: T) => Promise<ValidationResult>;

export type ValidationResult = string | null;

export const validateValue = async<T> (value: any, validators: Validator<T>[]): Promise<ValidationResult> => {
  let validationResult: ValidationResult = null;
  let i = 0;

  while (validationResult === null && i < validators.length) {
    const res = await validators[i](value);

    if (res !== null) {
      validationResult = res;
    }
    i++;
  }

  return validationResult;
}