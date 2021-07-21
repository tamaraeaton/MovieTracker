import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteMovie extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        axios.delete("http://localhost:8080/movieTracker/movies/delete/" + this.props.movie._id)
            .then(res => {
                console.log(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <tr>
                    <td>
                        {this.props.movie.movie_description}
                    </td>
                    <td>
                        {this.props.movie.movie_price}
                    </td>
                    <td>
                        <button className="btn btn-block btn-danger" onClick={this.handleDelete}>Delete</button>

                    </td>
                </tr>
            </>
        )
    }
}
