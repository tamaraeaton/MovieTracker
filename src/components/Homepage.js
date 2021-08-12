import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            username: '',
            password: '',
            name: '',
            newUsername: '',
            newPassword: '',
            newName: '', 
            userInput: '',
            passInput: ''
        }
        // this.onInputChange = this.onInputChange.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleNewUsername = this.handleNewUsername.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
        // Removed handleName on create account component, keeping just in case it affects anything down the road
        // Removed it from this.state and the model
        // this.handleName = this.handleName.bind(this);
    }

    handleCreate(e) {
        e.preventDefault();
        const newAccount = {
            username: this.state.newUsername,
            password: this.state.newPassword,
            name: this.state.newName

        }
        console.log(newAccount)
        alert('Hello ' + this.state.newName +
            ',  Please enter your name and password in the login to continue')

        axios.post('http://localhost:8080/movieTracker/add', newAccount)

        this.setState({
            newUsername: '',
            newPassword: '',
            newName: ''
        })
    }
    // end account create function

    // Login function - authenticates password
    // password is false or to permit login in password is valid
 
    //handleLoginInput() {
    // code to capture the full login name for handleLogin() to pass the full name entered
    // }

    handleLogin(event) {
        event.preventDefault()
        // alert('Login was clicked')
        // password authentication
        axios.get('http://localhost:8080/movieTracker/username/' + this.state.userInput + '/password/' +
            this.state.password)
            .then(res => {
                this.setState({
                    login: true,
                    id: res.data._id,
                    name: res.data.name,
                    password: '',
                    username: ''
                })
                return this.props.history.push('/account/' + res.data._id)
            })
            .catch(function (err) {
                // console.log(err)
            });
            // if (this.state.login === true) {
            //     return <Redirect to='/account'  />
            // } else {
            //     alert('password not correct')
            // }
 
        // button render if password is valid
        // if (this.state.login === true) {
        //     return (
        //         <Link to={'/account/' + this.state.id} className="text-white text-decoration-none">Login</Link>
        //     )
        // }

        // invalid password dead link with modal
        // if (this.state.login === false) {
        //     return (
        //         <div>

        //             <Link to={'/'} className="text-white text-decoration-none" data-toggle="modal" data-target="#authModal">Login</Link>

        //             <div className="modal" id="authModal">
        //                 <div className="modal-dialog modal-dialog-centered">
        //                     <div className="modal-content">


        //                         <div className="modal-header">
        //                             <h4 className="modal-title">Error!</h4>
        //                         </div>

        //                         <div className="modal-body">
        //                             Incorrect username and/or password.<br />
        //                             Please try again or create an account.
        //                         </div>


        //                         <div className="modal-footer">
        //                             <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     )
        // }

    //     this.setState({
    //         login: false
    //     })
    }
    // end login function

    // logging in
    // login username input 
    handleUsername(e) {
        this.setState({
            username: e.target.value,
            userInput: e.target.value
        })
        console.log(this.state.username)
    }
    // end login username input


    // login password input
    handlePassword(e) {
        this.setState({
            password: e.target.value,
            passInput: e.target.value
        })
    }

    onNameChange = (evt) => {
        this.setState({ name: evt.target.value });
        };

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.username] = evt.target.value;
        this.setState({ fields });
        };

    // when creating a new user
    // new username input
    handleNewUsername(e) {
        this.setState({
            newUsername: e.target.value
        })
    }

    // new password input
    handleNewPassword(e) {
        this.setState({
            newPassword: e.target.value
        })
    }

    // new name input
    // handleName(e) {
    //     this.setState({
    //         newName: e.target.value
    //     })
    // }

    render() {
        return (
            <div>
                  <div className="backgroundImg"></div>
                <div id="background-fade">
                    <h1 className="title">Movie Tracker</h1>
                    <h3 className="description">If you love to watch movies, then track them on this app!</h3>
                </div>

              
               
                <nav className="homepageNavbar">
                   
               

                    {/* Login Form begin */}
                
                        <form className="loginForm">
                            <p className="usernameTitle">Username
                            
                            <input
                                className="usernameField"
                                // Changing the value to this.state.username stops the uncontrolled error message
                                // value={this.state.username}
                                value={this.state.userInput}
                                onChange={this.onInputChange}
                                onChange={this.handleUsername}
                                // error message says 'No duplicate props allowed'
                                autoComplete="off"
                                required
                            /></p>
                            
                            <p className="passwordTitle">Password
                            <input
                                type="password"
                                // Changing the value to this.state.password stops the uncontrolled error message
                                className="passwordField"
                                // value={this.state.password}
                                value={this.state.passInput}
                                onChange={this.onInputChange}
                                onChange={this.handlePassword}
                                // error message says 'No duplicate props allowed'
                                autoComplete="off"
                                required
                            /></p>
                            <button
                            onClick={this.handleLogin}
                            >Login</button>
                            {/* {this.handleLogin()} */}

                        </form>
                    {/* Login form end */}

               

                </nav>

                {/* intro section begin */}
                <div>
                    {/* create account begin */}

                    <div className="createAccount">
                        <p>Input your information to create an account.</p>
                        <form onSubmit={this.handleCreate}>
                            <p>Username
                                <input
                                    value={this.state.newUsername} onChange={this.handleNewUsername} />
                            </p>
                            <p>Password
                                <input type="password"
                                    value={this.state.newPassword} onChange={this.handleNewPassword} autoComplete="off" />
                            </p>
                            {/* <p>Name
                                <input
                                    value={this.state.newName} onChange={this.handleName } autoComplete="off"/>
                            </p> */}
                            <button type="submit" className="btn createAccButton">Create</button>
                        </form>

                    </div>

                    {/* end of create account */}
                </div>
                {/* end of intro section */}

            </div>
        )
    }
}