import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };

const validate = [{
  name: 'email',
  label: 'Email',
  placeholder: 'Insert Email',
  rules: 'required|email|string|between:5,25',
}, {
  name: 'password',
  label: 'Password',
  placeholder: 'Insert Password',
  rules: 'required|string|between:5,25',
}, {
  name: 'passwordConfirm',
  label: 'Password Confirmation',
  placeholder: 'Confirm Password',
  rules: 'same:password',
}];
