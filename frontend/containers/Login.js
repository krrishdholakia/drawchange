import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeUserType } from '../actions/index'
import Modal from '../components/Modal'
import FormBody from '../components/FormBody'

const items = [
  {
    label: "Username",
    type: "text"
  },
  {
    label: "Password",
    type: "password"
  }
]

function request() {
  fetch().then((resp) => resp.json())
}

function _login() {
  alert("HA")
}

const Login = ({userType, changeUserType}) => (
  <div className="jumbotron">
    <h1 className="display-3">{userType}</h1>
    <div className="lead">
      Don't have an account?
      <Link to="/registration"> sign up </Link>
    </div>
    <hr className="my-4"/>
    <div className="lead d-flex">
      <button className="btn btn-primary btn-lg" href="#" role="button" data-toggle="modal" data-target="#exampleModal">login</button>

      <Modal title={`${userType} Login`} action="Login" callback={_login}>
        <FormBody items={items}/>
      </Modal>

      <button type="button" className="btn btn-link align-self-end"
         onClick={changeUserType}>
        Login as {userType === "Volunteer" ? "administrator" : "volunteer"}
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => {
    return {
        userType: state.userType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      changeUserType: () => dispatch(changeUserType())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
