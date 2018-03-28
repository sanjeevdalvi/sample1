import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../reducers/auth';

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn();
  };

  render() {
    return !this.props.isAuthenticated ? (
      <form onSubmit={this.handleSubmit}>
        <button>Log in</button>
      </form>
    ) : null;
  }
}

const mapsStateToProps = ({
  authReducer: { loggingIn, error, isAuthenticated },
}) => ({ loggingIn, error, isAuthenticated });
const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(logIn()),
});
export default connect(mapsStateToProps, mapDispatchToProps)(LoginForm);
