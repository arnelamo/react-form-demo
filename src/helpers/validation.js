import { PHONE_REGEX, EMAIL_REGEX } from './constants'

export default function validate(values) {
  let errors = {};
  if (values.name.length < 2) {
    errors.name = "Vennligst skriv inn et gyldig navn"
  }
  if (!values.email) {
    errors.email = 'Vennligst fyll inn din e-postadresse';
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Vennligst skriv inn en gyldig e-postadresse';
  }

  if (values.phone.length && !PHONE_REGEX.test(values.phone)) {
    errors.phone = 'Vennligst skriv inn et gyldig telefonnummer';
  }

  return errors;
};