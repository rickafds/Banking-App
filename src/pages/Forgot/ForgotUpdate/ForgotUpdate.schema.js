import { object, string, ref } from 'yup';

const validationSchema = object().shape({
  password: string()
    .min(8, 'Minimo 8 Digitos')
    .label('password')
    .required('Required'),

  confirm_password: string()
    .label('confirm_password')
    .oneOf([ref('password'), null], 'Os campos precisam ser iguais'),

  code: string()
    .label('code')
    .min(4)
    .required('Required'),
});

export default validationSchema;
