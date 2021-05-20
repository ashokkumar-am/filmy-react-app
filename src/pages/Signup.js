import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


// And now we can use these
const Signup = () => {
    return (
        <>
            <h1>Register Form!</h1>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',

                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
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
                        label="username"
                        name="username"
                        type="text"
                        placeholder="Rajesh"
                    />
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




                    <button type="submit" className="btnstyle">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default Signup;