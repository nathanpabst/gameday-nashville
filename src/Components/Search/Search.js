import React from 'react';

import './Search.css';

class Search extends React.Component {
  state = {
    userInput: '',
  }

  handleInputChange = () => {
    this.props.onSearch(
      this.search.value,
    );
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-5 searchBar">
          <div className="input-group">
            <input
              type="text" className="form-control"
              placeholder="Search for team"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
