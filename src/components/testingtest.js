import React from 'react';

class FetchDataTesting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
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
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        <p>{item.description}</p>
                        <p>{item.releaseDate}</p>
                        <p>{item.name}</p>
                        <img src={`http://3.108.14.110/public/uploads/${item.moviePhoto}`} alt={item.moviePhoto} />
                    </li>
                ))}
            </ul>
        );
    }
};

export default FetchDataTesting;