import { email, object } from 'yup';

const validationSchema = object().shape({
  email: email()
    .label('email')
    .required('Required'),
});

export default validationSchema;
