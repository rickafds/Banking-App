import { string, object } from 'yup';

const validationSchema = object().shape({
  email: string()
    .email()
    .label('email')
    .required('Required'),
});

export default validationSchema;
