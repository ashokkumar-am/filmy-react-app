import React from 'react';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch('http://3.108.14.110/api/v1/movie/list')
            .then(res => res.json())
            .then(result => {
                console.log(result.data);
                this.setState({
                    items: result.data
                });
            });

    }

    render() {
        const { items } = this.state;


        return (
            <div className="container-fluid">
                <div className="row">
                    {items.map(item => (
                        <div className="col-md-4 my-2 rounded">
                            <div className="card">
                                <img src={`http://3.108.14.110/uploads/${item.moviePhoto}`} className="card-img-top" alt="{item.moviePhoto}" width="193" height="130" />
                                <div className="card-body">
                                    <h5 className="card-title">Movie Name : {item.name}</h5>
                                    <p className="card-text">Movie Description : {item.description}</p>
                                    <p className="card-text">Ticket Price : {item.ticketPrice}</p>
                                    <p className="card-text">Genre : {item.genre}</p>
                                    <p className="card-text">Rating : {item.rating}</p>
                                    <p className="card-text">Release Date : {item.releaseDate}</p>
                                    <button href="" className="btn btn-primary">CLICK HERE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
};

export default Movie;