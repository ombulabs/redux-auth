import React, { PropTypes } from "react";
import RequestPasswordResetErrorModal from "./modals/RequestPasswordResetErrorModal";
import RequestPasswordResetSuccessModal from "./modals/RequestPasswordResetSuccessModal";
import UpdatePasswordErrorModal from "./modals/UpdatePasswordErrorModal";
import UpdatePasswordSuccessModal from "./modals/UpdatePasswordSuccessModal";
import DestroyAccountErrorModal from "./modals/DestroyAccountErrorModal";
import DestroyAccountSuccessModal from "./modals/DestroyAccountSuccessModal";
import PasswordResetSuccessModal from "./modals/PasswordResetSuccessModal";
import TokenBridge from "../TokenBridge";
import { connect } from "react-redux";

class AuthGlobals extends React.Component {
  static propTypes = {
    requestPasswordResetErrorEnabled: PropTypes.bool,
    requestPasswordResetSuccessEnabled: PropTypes.bool,
    updatePasswordErrorEnabled: PropTypes.bool,
    updatePasswordSuccessEnabled: PropTypes.bool,
    destroyAccountErrorEnabled: PropTypes.bool,
    destroyAccountSuccessEnabled: PropTypes.bool,
    passwordResetSuccessEnabled: PropTypes.bool,
    passwordResetErrorEnabled: PropTypes.bool
  };

  static defaultProps = {
    requestPasswordResetErrorEnabled: true,
    requestPasswordResetSuccessEnabled: true,
    updatePasswordErrorEnabled: true,
    updatePasswordSuccessEnabled: true,
    destroyAccountErrorEnabled: true,
    destroyAccountSuccessEnabled: true,
    passwordResetSuccessEnabled: true,
    passwordResetErrorEnabled: true
  };

  render () {
    let showRequestPasswordResetError = (
      this.props.requestPasswordResetErrorEnabled &&
      this.props.auth.getIn(["ui", "requestPasswordResetErrorModalVisible"])
    );

    let showRequestPasswordResetSuccess = (
      this.props.requestPasswordResetSuccessEnabled &&
      this.props.auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"])
    );

    let updatePasswordSuccess = (
      this.props.updatePasswordSuccessEnabled &&
      this.props.auth.getIn(["ui", "updatePasswordSuccessModalVisible"])
    );

    let updatePasswordError = (
      this.props.updatePasswordErrorEnabled &&
      this.props.auth.getIn(["ui", "updatePasswordErrorModalVisible"])
    );

    let destroyAccountSuccess = (
      this.props.destroyAccountSuccessEnabled &&
      this.props.auth.getIn(["ui", "destroyAccountSuccessModalVisible"])
    );

    let destroyAccountError = (
      this.props.destroyAccountErrorEnabled &&
      this.props.auth.getIn(["ui", "destroyAccountErrorModalVisible"])
    );

    let passwordResetSuccess = (
      this.props.passwordResetSuccessEnabled &&
      this.props.auth.getIn(["ui", "passwordResetSuccessModalVisible"])
    );

    //let passwordResetError = (
    //this.props.passwordResetErrorEnabled &&
    //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
    //);

    return (
      <div id="auth-modals">
        <RequestPasswordResetErrorModal show={showRequestPasswordResetError} />
        <RequestPasswordResetSuccessModal show={showRequestPasswordResetSuccess} />
        <UpdatePasswordErrorModal show={updatePasswordError} />
        <UpdatePasswordSuccessModal show={updatePasswordSuccess} />
        <DestroyAccountErrorModal show={destroyAccountError} />
        <DestroyAccountSuccessModal show={destroyAccountSuccess} />
        <PasswordResetSuccessModal show={passwordResetSuccess} />
        <TokenBridge />
      </div>
    );
  }
}

export default connect(({auth}) => ({auth}))(AuthGlobals);
