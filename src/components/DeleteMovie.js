import React, { Component } from 'react';

export default class DeleteMovie extends Component {

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
                        <button className="btn btn-block btn-danger" onClick={() => this.props.handleDelete(this.props.movie._id)}>Delete</button>

                    </td>
                </tr>
            </>
        )
    }
}
