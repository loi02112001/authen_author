import React from "react";
import * as actions from '../actions/index'
import { connect } from "react-redux";
import ComponentLogin from "../components/ComponentLogin";

class ItemPageContainer extends React.Component{
    render(){
        return(
            <ComponentLogin {...this.props} />
        )
    }
}
const mapDisPatchToProps = (dispatch) =>{
    return{
        login:(data)=>{
            dispatch(actions.loginStudentRequest(data))
        }
    
    }
}
export default connect(null, mapDisPatchToProps)(ItemPageContainer)