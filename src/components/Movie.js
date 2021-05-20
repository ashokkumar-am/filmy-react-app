// import axios from 'axios';
import React from 'react';

class Movie extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://3.108.14.110/api/v1/movie/list';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((p) => console.log('This is your data', p));
    }
    render() {
        return <h1>my Component has Mounted, Check the browser 'console' {this.data}</h1>;
    }
}
export default Movie;
