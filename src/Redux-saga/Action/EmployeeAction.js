import * as ActionType from '../Constant/EmployeeConstant'

export const GetEmployeeRequest = () => ({
    type : ActionType.GET_EMPLOYEE_REQUEST
})

export const GetEmployeeSuccess = (payload) => ({
    type : ActionType.GET_EMPLOYEE_SUCCESS,
    payload
})

export const GetEmployeeFailed = (payload) => ({
    type : ActionType.GET_EMPLOYEE_FAILED,
    payload
})

export const DelEmployeeRequest = (payload) => ({
    type:ActionType.DEL_EMPLOYEE_REQUEST,
    payload
})

export const DelEmployeeSuccess = (payload) => ({
    type:ActionType.DEL_EMPLOYEE_SUCCESS,
    payload
})

export const DelEmployeeFailed = (payload) =>({
    type : ActionType.DEL_EMPLOYEE_FAILED,
    payload
})

export const AddEmployeeRequest = (payload) => ({
    type:ActionType.ADD_EMPLOYEE_REQUEST,
    payload
})

export const AddEmployeeSuccess = (payload) => ({
    type:ActionType.ADD_EMPLOYEE_SUCCESS,
    payload
})

export const AddEmployeeFailed = (payload) =>({
    type : ActionType.ADD_EMPLOYEE_FAILED,
    payload
})