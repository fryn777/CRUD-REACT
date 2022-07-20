import * as ActionType from '../Constant/EmployeeConstant'

const INIT_STATE = {
    employees: []
}

const EmployeeReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.GET_EMPLOYEE_SUCCESS:
            return GetEmployeeSucceed(state, action)
        case ActionType.DEL_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.DEL_EMPLOYEE_SUCCESS:
            return DelEmployeeSucceed(state, action)
        case ActionType.ADD_EMPLOYEE_REQUEST:
            return { ...state }
        case ActionType.ADD_EMPLOYEE_SUCCESS:
            return AddEmployeeSucceed(state, action)
        default:
            return GetEmployeeSucceed(state, action)
    }
}

const GetEmployeeSucceed = (state, action) => {
    return {
        ...state,
        employees: action.payload
    }
}
const DelEmployeeSucceed = (state, action) => {
    const { payload } = action
    const filterEmployee = state.employees.filter(el => el.employee_id !== payload)
    return {
        ...state,
        employees: [...filterEmployee]
    }
}
const AddEmployeeSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        employees: [...state.employees,payload]
    }
}
export default EmployeeReduce