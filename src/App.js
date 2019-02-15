import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import Api from "./API/Conf";
import * as Path from './API/URL';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesAPI: Path.MOVIES
    };
  }

  componentDidMount() {
    Api.get(Path.MOVIES)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
        console.log(res);
      });
  }

render() {
    return (
        <tbody>
            {this.state.movies.map(c =>
              <tr>
                <td>{c.movieId} {c.name}</td>
                <td>{c.duration}</td>
                <Link to={Path.MOVIES + '/' + c.movieId}>Сеансы</Link>
              </tr>
            )}
          </tbody>
    )
  }
}

export default App;
