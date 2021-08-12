import React, { Component } from "react";
import axios from "axios";

import DeleteMovie from "./DeleteMovie";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }

  //  componentDidMount() {
  //     axios.get('http://localhost:8080/movieTracker/movies/' + this.props.username)

  //         .then(res => {
  //             console.log("res " , res)
  //             this.setState({
  //                 movie: res.data
  //             })
  //             console.log("res.data", res.data)
  //             console.log("this.props.username " , this.props.username)
  //         })
  //         .catch(err => {
  //             console.log(err)
  //         })
  // }


  componentDidMount() {
    axios
      .get("http://localhost:8080/movieTracker/movies/" + this.props.username)
      .then((res) => {
        console.log(res);
        this.setState({
          movie: res.data,
        });

        // console.log("res.data", res.data)
        })
      .catch((err) => {
        console.log(err);
      });
  }

  // THIS ERROR MESSAGE POPS UP WHEN CLICKING LOGOUT
  // index.js:1452 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
  // in MovieList (at Account.js:49)
  // in div (at Account.js:48)
  // in div (at Account.js:34)
  // in Welcome (created by Route)

  // Cancel all asyncrounous requests to stop memory leak
  // componentWillUnmount() {

  // }

  // movieList() {
  //     console.log(this.state.movie)
  //     return this.state.movie.map(function (current, i) {
  //      return <DeleteMovie movie={current} key={i} />
  //     })
  // }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <div id='movie-list'>
          <table
            id='table-list'
            className='table table-striped'
            style={{ marginTop: 20 }}
          >
            <thead>
              <tr>
                <th>Movie</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id='movie-items'>
              {this.state.movie && this.state.movie.map(function(current, i) {
                  return <DeleteMovie movie={current} key={i} />;
                })}
              {/* {() => this.movieList()} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
