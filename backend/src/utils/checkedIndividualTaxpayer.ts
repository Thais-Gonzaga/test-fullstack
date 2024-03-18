const getValidateDigit = (init: number, individualTaxpayer: string) => {
  const result = [];
  for (let index = init; index > 1; index -= 1) {
    const digit = Number(individualTaxpayer[init - index]);
    const product = index * digit;
    result.push(product);
  }
  const validateRest = (result.reduce((sum, number) => sum + number) * 10) % 11;
  return validateRest === 10 ? 0 : validateRest;
};

export const checkedIndividualTaxpayer = (
  individualTaxpayerEncoded: string
) => {
  const regexFormat = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const individualTaxpayer = individualTaxpayerEncoded.replace(/\D+/g, "");
  const validateZero = individualTaxpayer
    .split("")
    .reduce((sum, num) => sum + Number(num), 0);
  if (validateZero === 0) return false;
  const validateFirstDigit = getValidateDigit(10, individualTaxpayer);
  if (validateFirstDigit !== Number(individualTaxpayer[9])) return false;
  const validateSecondDigit = getValidateDigit(11, individualTaxpayer);
  if (validateSecondDigit !== Number(individualTaxpayer[10])) return false;
  if (!regexFormat.test(individualTaxpayerEncoded)) return false;

  return true;
};
