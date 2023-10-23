import * as yup from 'yup';

export const staffMemberValidationSchema = yup.object().shape({
  position: yup.string().required(),
  years_of_experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
