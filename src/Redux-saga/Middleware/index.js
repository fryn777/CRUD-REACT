import { takeEvery, all } from "redux-saga/effects";
import {
  handleAddRegion,
  handleDelRegion,
  handleGetRegion,
} from "./RegionMiddle";
import {
  handleAddEmployee,
  handleDelEmployee,
  handleGetEmployee,
} from "./EmployeeMidle";
import * as ActionTypeRegion from "../Constant/RegionConstant";
import * as ActionTypeEmployee from "../Constant/EmployeeConstant";
import * as ActionTypeCountry from "../Constant/CountryConstant";
import {
  handleAddCountry,
  handleDelCountry,
  handleGetCountry,
} from "./CountryMidle";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST, handleGetEmployee),
    takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST, handleDelEmployee),
    takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST, handleAddEmployee),
    takeEvery(ActionTypeCountry.GET_COUNTRY_REQUEST, handleGetCountry),
    takeEvery(ActionTypeCountry.DEL_COUNTRY_REQUEST, handleDelCountry),
    takeEvery(ActionTypeCountry.ADD_COUNTRY_REQUEST, handleAddCountry),
  ]);
}

export default watchAll;
