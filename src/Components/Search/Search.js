import React from 'react';

import './Search.css';

class Search extends React.Component {
  state = {
    userInput: '',
  }

  handleInputChange = () => {
    this.setState({
      userInput: this.search.value,
    });
  }

  render () {
    return (
      <div class="row">
        <div class="col-lg-6">
          <div class="input-group">
            <input
              type="text" className="form-control"
              placeholder="Search for team"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
            <p>{this.state.userInput}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
