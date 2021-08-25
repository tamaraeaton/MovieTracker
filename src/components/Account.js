import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            movies: []
            // name: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movieTracker/' + this.props.match.params.id)
            .then(res => {
                console.log(res)
                this.setState({
                    username: res.data.username,
                    // name: res.data.name
                })
                this.fetchMovies(res.data.username)
                // console.log("this.state.username", this.state.username)
           
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    

  fetchMovies(username) {
    axios
      .get("http://localhost:8080/movieTracker/movies/" + username)
      .then((res) => {
        console.log(res);
        this.setState({
          movies: res.data,
        });

        // console.log("res.data", res.data)
        })
      .catch((err) => {
        console.log(err);
      });
  }

    testAddMovie = (newMovie) => {
        console.log(this.state)
        axios.post("http://localhost:8080/movieTracker/addMovie", newMovie)
            .then(res => {
                this.fetchMovies(this.state.username)
                console.log(res.data);
            })
        // this.setState({
        //     movie_description: "",
        //     movie_price: "",
        // })
    }

    handleDelete = (movieId) => {
        axios.delete("http://localhost:8080/movieTracker/movies/delete/" + movieId)
            .then(res => {
                this.fetchMovies(this.state.username)
                console.log(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <nav className="homepageNavbar" id="accountPageNavbar">

                    {/* greeting*/}
                    <h2 className="helloUser">Hello, {this.state.username}!</h2>

                    <button className="editAccount"><Link to={'/update/' + this.props.match.params.id}>Edit Account</Link></button>

                    
                    <button className="logoutButton" type="button" onClick={this.handleLogout}>
                        <Link to={'/'} className="text-decoration-none logoutButton">
                            Logout
                        </Link></button>
                </nav>
                {this.state.movies && (
                <div className="movieList">
                    <MovieList  movies={this.state.movies} handleDelete={this.handleDelete}/>
                </div>
                )}
                {this.state.username && (
                <div className="addMovie">
                    <AddMovie username={this.state.username}  testAddMovie={this.testAddMovie}/>
                </div>
                )}
            </div>
        )
    }
}