import * as types from '../constants'
export function getStudentRequest(payload){
    return{
        type: types.GET_STUDENT_REQUEST,
        payload
    }
}
export function getStudentSuccess(payload){
    return{
        type: types.GET_STUDENT_SUCCESS,
        payload
    }
}
export function getStudentFailure(payload){
    return{
        type: types.GET_STUDENT_FAILURE,
        payload
    }
}
export function addStudentRequest(payload){
    return{
        type: types.ADD_STUDENT_REQUEST,
        payload
    }
}
export function addStudentSuccess(payload){
    return{
        type: types.ADD_STUDENT_SUCCESS,
        payload
    }
}
export function addStudentFailure(payload){
    return{
        type: types.ADD_STUDENT_FAILURE,
        payload
    }
}
export function deleteStudentRequest(payload){
    return{
        type: types.DELETE_STUDENT_REQUEST,
        payload
    }
}
export function deleteStudentSuccess(payload){
    return{
        type: types.DELETE_STUDENT_SUCCESS,
        payload
    }
}
export function deleteStudentFailure(payload){
    return{
        type: types.DELETE_STUDENT_FAILURE,
        payload
    }
}
export function updateStudentRequest(payload){
    return{
        type: types.UPDATE_STUDENT_REQUEST,
        payload
    }
}
export function updateStudentSuccess(payload){
    return{
        type: types.UPDATE_STUDENT_SUCCESS,
        payload
    }
}
export function updateStudentFailure(payload){
    return{
        type: types.UPDATE_STUDENT_FAILURE,
        payload
    }
}
export function loginStudentRequest(payload){
    return{
        type: types.LOGIN_REQUEST,
        payload
    }
}
export function loginStudentSuccess(payload){
    return{
        type: types.LOGIN_SUCCESS,
        payload
    }
}
export function loginStudentFailure(payload){
    return{
        type: types.LOGIN_FAILURE,
        payload
    }
}
export function signUpRequest(payload){
    return{
        type: types.SIGN_UP_REQUEST,
        payload
    }
}
export function signUpSuccess(payload){
    return{
        type: types.SIGN_UP_SUCCESS,
        payload
    }
}
export function signUpFailure(payload){
    return{
        type: types.SIGN_UP_FAILURE,
        payload
    }
}

export function searchRequest(payload){
    return{
        type: types.SEARCH_REQUEST,
        payload
    }
}
export function searchSuccess(payload){
    return{
        type: types.SEARCH_SUCCESS,
        payload
    }
}
export function searchFailure(payload){
    return{
        type: types.SEARCH_FAILURE,
        payload
    }
}

