import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string().required('Write name'),
  email: Yup.string().email('Not correct email').required('Write email'),
  password: Yup.string()
    .min(6, 'Minimum 6 symbols')
    .matches(/[A-Z]/, 'Должна быть заглавная буква')
    .matches(/[a-z]/, 'Должна быть строчная буква')
    .matches(/[@$!%*#?&]/, 'Должен быть один спецсимвол')
    .required('Введите пароль!'),
});
