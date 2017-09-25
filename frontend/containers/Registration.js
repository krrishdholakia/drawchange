import React from 'react';
import { connect } from 'react-redux';
import FormHeader from '../components/FormHeader'
import FormBody from '../components/FormBody'
import FormFooter from '../components/FormFooter'
import { register } from '../actions/index'

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

const Registration = ({userType}) => {
    return (
      <div className="card">
        <FormHeader title={`New ${userType}`}/>
        <FormBody items={items}/>
        <FormFooter action="Register"/>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
      userType: state.userType
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      register: dispatch(register())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
