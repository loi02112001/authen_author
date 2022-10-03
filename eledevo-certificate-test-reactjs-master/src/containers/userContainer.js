
import React from "react";
import * as actions from '../actions/index'
import { connect } from "react-redux";
import ComponentUser from "../components/ComponentUser";

class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.initLoad()
    }
    render(){
        return(
            <ComponentUser {...this.props} />
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
        searchItem:(data)=>{
            dispatch(actions.searchRequest(data))
        }
    
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(ItemPageContainer)