import React from "react";
import * as actions from '../actions/index'
import { connect } from "react-redux";
import ComponentSignUp from "../components/ComponentSignUp";

class ItemPageContainer extends React.Component {
    render() {
        return (
            <ComponentSignUp {...this.props} />
        )
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        signUp: (data) => {
            console.log(data);
            dispatch(actions.signUpRequest(data))
        }
    }
}
export default connect(null, mapDisPatchToProps)(ItemPageContainer)