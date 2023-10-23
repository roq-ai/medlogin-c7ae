import * as yup from 'yup';

export const doctorValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  years_of_experience: yup.number().integer().required(),
  working_days: yup.string().required(),
  working_hours: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
