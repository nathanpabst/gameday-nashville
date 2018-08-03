import React from 'react';

import './Search.css';

class Search extends React.Component {
  state = {
    searchTerm: '',
  }

  handleInputChange = () => {
    this.props.onSearch(
      this.search.value,
    );
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group searchBar">
            <input
              type="text" className="form-control"
              placeholder="Search for team"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
