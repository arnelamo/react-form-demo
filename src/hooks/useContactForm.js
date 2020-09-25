import { useState, useEffect } from 'react';
import { FORM_CONSTANTS } from './constants'

const useContactForm = (submitForm, validate) => {
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    areacode: "",
    comment: "",
    soda: "",
    energydrink: "",
    caffeine: "",
    applicant: FORM_CONSTANTS.APPLICANT,
  });

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return {
    handleChange,
    handleSubmit,
    setIsSubmitting,
    values,
    errors,
  }
};

export default useContactForm;