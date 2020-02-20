import {string, object} from 'yup'; // for only what you need

const validationSchema = object().shape({
  cpf: string()
    .label('cpf')
    .required('Required'),

  password: string()
    .label('password')
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

export default validationSchema;
