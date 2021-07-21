import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
            // name: "",
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movieTracker/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username
                    // name: res.data.name,
                })
                // console.log("this.state.username", this.state.username)
           
            })
            .catch(function (error) {
                console.log(error)
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

                <div className="movieList">
                    <MovieList username={this.state.username} />
                </div>
                <div className="addMovie">
                    <AddMovie username={this.state.username} />
                </div>

            </div>
        )
    }
}