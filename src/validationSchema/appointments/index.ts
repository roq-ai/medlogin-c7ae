import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  appointment_date: yup.date().required(),
  appointment_time: yup.string().required(),
  doctor_id: yup.string().nullable().required(),
  patient_id: yup.string().nullable().required(),
});
