import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput'



// And now we can use these
const Create = () => {
    return (
        <>
            <h1>Register Form!</h1>
            <Formik
                initialValues={{
                    movieName: '',
                    movieDescription: '',
                    movieRelesaeDate: '',
                    movieRating: '',
                    ticketPrice: '',
                    country: '',
                    genre: '',
                    moviepicture: '',

                }}
                validationSchema={Yup.object({
                    movieName: Yup.string()
                        .max(40, 'Must be 15 characters or less')
                        .required('Required'),
                    movieDescription: Yup.string()
                        .max(200, 'Must be 200 characters or less')
                        .required('Required'),
                    movieRelesaeDate: Yup.date()
                        .required('Please Select the Date!'),
                    movieRating: Yup.string()
                        .max(5, 'Must be 15 characters or less')
                        .required('Required'),
                    ticketPrice: Yup.string()
                        .max(10, 'Must be 15 characters or less')
                        .required('Required'),
                    country: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    genre: Yup.string()
                        .max(20, 'Must be 15 characters or less')
                        .required('Required'),
                    moviepicture: Yup.mixed()
                        .required('Required a Movie Picture!')
                        .test(
                            "fileSize",
                            "Your Image is too big :(", value =>
                            value && value.size <= 26214000
                        )

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
                        label="movieName"
                        name="movieName"
                        type="text"
                        placeholder="Karnan"
                    />
                    <MyTextInput
                        label="movieDescription"
                        name="movieDescription"
                        type="textarea"
                        placeholder="about Karnan Movie Review..."
                    />
                    <MyTextInput
                        label="movieRelesaeDate"
                        name="movieRelesaeDate"
                        type="date"
                        placeholder="****"
                    />
                    <MyTextInput
                        label="movieRating"
                        name="movieRating"
                        type="number"
                        placeholder="movie rating..."
                    />
                    <MyTextInput
                        label="ticketPrice"
                        name="ticketPrice"
                        type="number"
                        placeholder="ticket price..."
                    />
                    <MyTextInput
                        label="country"
                        name="country"
                        type="text"
                        placeholder="Countries...."
                    />
                    <MyTextInput
                        label="genre"
                        name="genre"
                        type="text"
                        placeholder="genre...."
                    />
                    <MyTextInput
                        label="moviePicture"
                        name="moviePicture"
                        type="file"
                        placeholder="upload the movie picture"
                    />


                    <button type="submit" className="btnstyle">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default Create;