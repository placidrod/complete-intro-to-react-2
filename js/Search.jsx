import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show =>
              `${show.title} ${show.description}`.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
