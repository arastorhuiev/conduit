import { FC } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from '../../../components/Container/Container';
import { Input } from '../../../components/Input/Input';

interface SignUpProps {}

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema = yup.object<SignUpFormValues>({
  username: yup.string().required('Username is required').min(3),
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required').min(6),
});

export const SignUp: FC<SignUpProps> = ({}) => {
  const { register } = useForm<SignUpFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <Container>
      <h1 className='text-4xl text-center mb-4'>Sign up</h1>
      <p className='text-center'>
        <Link to='/sign-in'>Have an account?</Link>
      </p>
      <form className='max-w-xl mx-auto flex flex-col gap-4'>
        <Input type='text' placeholder='Username' {...register('username')} />
        <Input type='email' placeholder='Email' {...register('email')} />
        <Input type='password' placeholder='Password' {...register('password')} />
      </form>
    </Container>
  );
};
