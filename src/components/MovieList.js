import React, { Component } from "react";

import DeleteMovie from "./DeleteMovie";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    };
  }
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
              {this.props.movies && this.props.movies.map((current, i) =>{
                  return <DeleteMovie movie={current} key={i} handleDelete={this.props.handleDelete} />;
                })}
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
