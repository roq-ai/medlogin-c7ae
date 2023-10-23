import * as yup from 'yup';

export const nurseValidationSchema = yup.object().shape({
  years_of_experience: yup.number().integer().required(),
  shift: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
