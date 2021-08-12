import React, { Component } from 'react';
import axios from 'axios'

export default class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie_description: "",
            movie_price: "",
        }
        this.handleMovieDescription = this.handleMovieDescription.bind(this)
        this.handleMoviePrice = this.handleMoviePrice.bind(this)
        this.handleSubmitMovie = this.handleSubmitMovie.bind(this)
    }

    handleSubmitMovie(e) {
        e.preventDefault();
        const newMovie = {
            username: this.props.username,
            movie_description: this.state.movie_description,
            movie_price: this.state.movie_price,

        }
        this.props.testAddMovie(newMovie)
        
    }

    handleMovieDescription(e) {
        this.setState({
            movie_description: e.target.value
        })
    }


    handleMoviePrice(e) {
        this.setState({
            movie_price: e.target.value
        })
    }


    render() {
        return (
            <>

                <form id="add-movie" className="container" onSubmit={this.handleSubmitMovie}>
                    <h3>Add Movie:</h3>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.movie_description}
                            onChange={this.handleMovieDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.movie_price}
                            onChange=
                            {this.handleMoviePrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-block btn-primary" />
                    </div>
                </form>
            </>
        )
    }
}

