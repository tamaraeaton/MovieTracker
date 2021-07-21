    import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieList from './MovieList';
import AddMovie from './AddMovie';

// parent component
export default class UpdateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passEdit: '',
            input: '',
            name: '',
            password: '',
            id: ''
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handlePassEdit = this.handlePassEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    // updates state with info from user account based on req.params.id
    componentDidMount() {
        axios.get('http://localhost:8080/movieTracker/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    username: res.data.username,
                    password: res.data.password

                })

            })
            .catch(function (err) {
                console.log(err)
            })
    }

    componentDidUpdate() {

        axios.get('http://localhost:8080/movieTracker/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    username: res.data.username,
                    password: res.data.password,
                    id: res.data._id
                })

            })
            .catch(function (err) {
                console.log(err)
            })

    }

    // input handlers

    handlePassEdit(e) {
        this.setState({
            passEdit: e.target.value
        })
    }

    // end input handlers



    // edit account handler, linked to edit modal
    handleEdit(e) {
        e.preventDefault();


        const editAccount = {
            password: this.state.passEdit,
            name: this.state.name,
        }

        axios.post('http://localhost:8080/movieTracker/update/' + this.props.match.params.id, editAccount)
        alert('Password has been updated')

        this.setState({
            name: '',
            passEdit: ''
        })
    }
    // end account edit function

    // delete account function
    handleDelete() {
        axios.delete('http://localhost:8080/movieTracker/delete/' + this.props.match.params.id)
        this.props.history.push("/")
        alert('Account has been deleted')

    }


    render() {
        return (
            <div>
                <nav className="accountPageNavbar">
                    <Link to={'/account/' + this.props.match.params.id} className="closeAccountButton">Close</Link>
                </nav>

                {/* profile section */}
                <div className="myAccount">

                    <div className="" id="editSection">
                        <h4 className="editTitle">Edit Your Account Information</h4>

                        <form onSubmit={this.handleEdit}>
                            <p>Name: <strong>{this.state.name}</strong></p>

                            <p>Password:</p>
                            <input type="password"
                                placeholder="update password"
                                value={this.state.passEdit}
                                onChange={this.handlePassEdit} />
                            <hr />
                            <button type="submit" className="btn updateButton">Update</button>
                        </form>
                        <div className="deleteSection">
                            <p>Click Here to Delete Your Account</p>
                            <button onClick={this.handleDelete} type="button" className="btn btn-danger">
                                Delete Account
                                    </button>
                        </div>
                    </div>
                </div>

                <div className="movieList">
                    <MovieList username={this.state.username} />
                </div>
                <div className="addMovie">
                    <AddMovie username={this.state.username} />
                </div>
                {/* end profile */}
            </div>
        )
    }
}
