
import React from "react";
import * as actions from '../actions/index'
import { connect } from "react-redux";
import ComponentAdmin from "../components/ComponentAdmin";

class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.initLoad()
    }
    render(){
        return(
            <ComponentAdmin {...this.props} />
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        items: state.items.listData,
    }
}
const mapDisPatchToProps = (dispatch) =>{
    return{
        initLoad:()=>{
            dispatch(actions.getStudentRequest())
        },
        addItem:(data)=>{
            dispatch(actions.addStudentRequest(data))
        },
        deleteItem:(data)=>{
            console.log(data);
            dispatch(actions.deleteStudentRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateStudentRequest(data))
        },
        searchItem:(data)=>{
            dispatch(actions.searchRequest(data))
        }
    
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(ItemPageContainer)