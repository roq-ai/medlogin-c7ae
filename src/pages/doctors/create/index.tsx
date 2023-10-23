import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { doctorValidationSchema } from 'validationSchema/doctors';
import { UserInterface } from 'interfaces/user';
import { DoctorInterface } from 'interfaces/doctor';

function DoctorCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: DoctorInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.doctor.create({ data: values as RoqTypes.doctor });
      resetForm();
      router.push('/doctors');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DoctorInterface>({
    initialValues: {
      specialization: '',
      years_of_experience: 0,
      working_days: '',
      working_hours: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: doctorValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Doctors',
              link: '/doctors',
            },
            {
              label: 'Create Doctor',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Doctor
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.specialization}
            label={'Specialization'}
            props={{
              name: 'specialization',
              placeholder: 'Specialization',
              value: formik.values?.specialization,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Years Of Experience"
            formControlProps={{
              id: 'years_of_experience',
              isInvalid: !!formik.errors?.years_of_experience,
            }}
            name="years_of_experience"
            error={formik.errors?.years_of_experience}
            value={formik.values?.years_of_experience}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('years_of_experience', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.working_days}
            label={'Working Days'}
            props={{
              name: 'working_days',
              placeholder: 'Working Days',
              value: formik.values?.working_days,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.working_hours}
            label={'Working Hours'}
            props={{
              name: 'working_hours',
              placeholder: 'Working Hours',
              value: formik.values?.working_hours,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/doctors')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'doctor',
    operation: AccessOperationEnum.CREATE,
  }),
)(DoctorCreatePage);
