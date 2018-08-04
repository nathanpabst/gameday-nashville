import React from 'react';
import { Alert } from 'react-bootstrap';

import './FormAlert.css';

class FormAlert extends React.Component {
  state = {
    show: true,
  };

  handleDismiss = () => {
    this.setState({ show: false });
  }

  render () {
    const message = this.props.message;
    const show = this.props.show;
    if (show && this.state.show) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>Oh dang! You missed something!</h4>
          <p>
            {message}
          </p>
          <p>
            <button onClick={this.handleDismiss}>Hide Alert</button>
          </p>
        </Alert>
      );
    } else {
      return <div> </div>;
    }
  }
}

export default FormAlert;
