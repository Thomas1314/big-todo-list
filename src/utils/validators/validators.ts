export type FieldValidatorType = (value: string) => string | undefined;

export const maxLength: FieldValidatorType = (value) => {
  if (value.length > 10) return 'Max length is 10 symbols';
};
