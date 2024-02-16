/**
 * change format the number
 * Input: 780560
 * Outout: 780,560.00
 *  */
export function formatCurrency(num: number): string {
  return num.toLocaleString();
}

export function getCreditCardFormat(creditCardNumber: string): string {
  const consored = censorCreditCardNumber(creditCardNumber)

  // Remove any non-digit characters
  const cleanedNumber = consored.replace(/\D/g, '');

  // Add a space after every 4 digits
  const maskedString = cleanedNumber.replace(/(.{4})/g, '$1 ').trim();

  return maskedString;
}


export function censorCreditCardNumber(creditCardNumber: string): string {
  // Remove any non-digit characters
  const cleanedNumber = creditCardNumber.replace(/\D/g, '');

  // Censor all digits except the last 4
  const censoredString = cleanedNumber.substring(0, cleanedNumber.length - 4).replace(/\d/g, 'X');

  // Add a space after every 4 digits for the last 4 digits
  const visibleDigits = cleanedNumber.substring(cleanedNumber.length - 4);
  const maskedString = censoredString.replace(/(.{4})/g, '$1 ').trim();

  return maskedString + " " + visibleDigits;
}
