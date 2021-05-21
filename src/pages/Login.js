import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput';



// And now we can use these
const Login = () => {
    return (
        <>
            <h1>Login Form!</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="rajes@gemini.com"
                    />

                    <MyTextInput
                        label="password"
                        name="password"
                        type="password"
                        placeholder="****"
                    />




                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default Login;