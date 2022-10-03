import * as types from '../constants'

const DEFAULT_STATE = {
    listData: [],
    isFetching: true,
    dataFetched: false,
    error: false,
    errorMessage: null,
}
export default (state = DEFAULT_STATE, actions) => {
    switch (actions.type) {
        case types.GET_STUDENT_REQUEST:

            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.GET_STUDENT_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listData: actions.payload.listStudent
            }
        case types.GET_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        case types.ADD_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.ADD_STUDENT_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.ADD_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        case types.DELETE_STUDENT_REQUEST:

            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.DELETE_STUDENT_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }
        case types.UPDATE_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.UPDATE_STUDENT_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.UPDATE_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }

        case types.SEARCH_REQUEST:

            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.SEARCH_SUCCESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
               
                listData: actions.payload.searchStudent,
               
            }
        case types.SEARCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: actions.payload.errorMessage
            }

            case types.SIGN_UP_REQUEST:
                return{
                    ...state,
                    isFetching:true,
                    dataFetched:false
                }
            case types.SIGN_UP_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    dataFetched:true
                }
            case types.SIGN_UP_FAILURE:
                return{
                    ...state,
                    isFetching:false,
                    dataFetched:false,
                    error: true,
                    errorMessage: 'Đăng kí thất bại'
                }
                case types.LOGIN_REQUEST:
                return{
                    ...state,
                    isFetching:true,
                    dataFetched:false
                }
            case types.LOGIN_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    dataFetched:true
                }
            case types.LOGIN_FAILURE:
                return{
                    ...state,
                    isFetching:false,
                    dataFetched:false,
                    error: true,
                    errorMessage: 'Đăng nhập thất bại'
                }
        default:
            return state
    }
}