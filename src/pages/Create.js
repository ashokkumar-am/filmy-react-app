import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/MyTextInput'
import MyTextArea from '../components/MyTextArea';
import MySelect from '../components/MySelectLabel';


// And now we can use these
const Create = () => {
    return (
        <>
            <h1>Movie Upload Form!</h1>
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
                        .required('Required a Movie Name'),
                    movieDescription: Yup.string()
                        .max(200, 'Must be 200 characters or less')
                        .required('Please provide the Description of the movie'),
                    movieRelesaeDate: Yup.date()
                        .required('Please Select the Date!'),
                    movieRating: Yup.string()
                        .max(5, 'Must be 15 characters or less')
                        .required('Please select the rating'),
                    ticketPrice: Yup.string()
                        .max(10, 'Must be 15 characters or less')
                        .required('Required a Ticket Price'),
                    country: Yup.string()
                        .required('Required'),
                    genre: Yup.string()
                        .required('Required')
                        .oneOf(["Comedy", "Drama", "Romance", "Thriller", "Melo Drama", "Classic", "Horror", "Action", "Science Fiction", "Documentry", "Fiction", "Kids"]),
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
                    <MyTextArea
                        label="movieDescription"
                        name="movieDescription"
                        type="textarea"
                        rows="6"
                        placeholder="about Karnan Movie Review..."
                    />

                    <MyTextInput
                        label="movieRelesaeDate"
                        name="movieRelesaeDate"
                        type="date"
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


                    <MySelect
                        label="genre"
                        name="genre">
                        <option value="">Select the Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Thriller</option>
                        <option value="classic">Classic</option>
                        <option value="horror">Horror</option>
                        <option value="action">Action</option>
                        <option value="science">Science Fiction</option>
                        <option value="documentry">Documentry</option>
                        <option value="fiction">Fiction</option>
                        <option value="kids">Kids</option>

                    </MySelect>


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