import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { landingFormAction, cookie } from '../services';
import { toast } from 'react-toastify';


export const LandingForm = () => {
  const [formType, setFormType] = useState('login');
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const _flippedStates = {
    login: 'register',
    register: 'login'
  };

  const onSubmit = (payload) => {
    if (formType === 'login') delete payload.name;
    return landingFormAction(payload)
      .then(({ data }) => {
        if (formType === 'login') {
          cookie('session_token', data?.data?.token);
          cookie('email', data?.data?.email);
          history.push('/home');
        } else {
          toast('Signup successful');
          reset();
          changeForm(formType);
        }
      })
      .catch((error) => {
        toast(error.response?.data?.message);
      });
  };

  const changeForm = (state) => setFormType(_flippedStates[state]);

  return (
    <>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          controlId="name"
          className={formType === 'login' ? 'hidden' : ''}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            className={errors.name ? 'border border-danger' : ''}
            {...register('name', { required: formType === 'register' })}
          />
          {errors.name && (
            <span className="text-danger d-block mt-1">Name is required</span>
          )}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={errors.email ? 'border border-danger' : ''}
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
            })}
          />
          {errors.email?.type === 'required' && (
            <span className="text-danger d-block mt-1">Email is required</span>
          )}

          {errors.email?.type === 'pattern' && (
            <span className="text-danger d-block mt-1">Email is not valid</span>
          )}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className={errors.password ? 'border border-danger' : ''}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-danger d-block mt-1">
              Password is required
            </span>
          )}
        </Form.Group>
        <Form.Group>
          <button href="#" onClick={() => changeForm(formType)}>
            Click here to {_flippedStates[formType]}
          </button>
        </Form.Group>
        <Button variant="primary" type="submit" className="text-capitalize">
          {formType}
        </Button>
      </Form>
    </>
  );
};
