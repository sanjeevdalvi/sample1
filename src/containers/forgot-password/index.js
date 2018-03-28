import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ChangePassword } from '../../reducers/personal-info';
import {
  Container,
  Heading,
  SubHeading,
  FormSection,
  Input,
  FormButton,
} from './styles';
import colors from '../../utils/colors.js';

const field = {
  type: 'email',
  errorMessage: 'Wrong pattern',
  placeholder: 'Email Address',
  name: 'emailAddress',
  required: true,
};

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.state;
    this.props.ChangePassword({
      ...formData,
    });
  }

  render() {
    return (
      <Container>
        <Heading fontSize={24} color={colors.BLACK}>
          Forgot your password? Not a problem.
        </Heading>
        <SubHeading fontSize={16} color={colors.BLACK}>
          Please enter the email address accociated with your account and we
          will email you a link to reset your password.
        </SubHeading>
        <FormSection onSubmit={this.handleSubmit}>
          <Input
            name={field.name}
            placeholder={field.placeholder}
            type={field.type}
            value={this.state[field]}
            required={field.required}
            onChange={this.handleChange}
          />
          <FormButton
            fontSize={18}
            fontWeight={600}
            color={colors.WHITE}
            bgColor={colors.MOBILE_HEADER_BG}
            padding={'10px 37px'}
          >
            Send
          </FormButton>
        </FormSection>
      </Container>
    );
  }
}

const mapsStateToProps = ({
  personalFormReducer: {
    loggingIn,
    error,
    isAuthenticated,
    authToken,
    resetPassword,
  },
  location,
}) => ({
  loggingIn,
  error,
  isAuthenticated,
  authToken,
  location,
  resetPassword,
});

const mapDispatchToProps = dispatch => ({
  ChangePassword: payload => dispatch(ChangePassword(payload)),
});

export default withRouter(
  connect(mapsStateToProps, mapDispatchToProps)(ForgotPassword)
);
