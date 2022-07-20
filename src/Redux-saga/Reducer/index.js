import { combineReducers } from "redux";

import RegionsReduce from "./RegionReducer";
import EmployeeReduce from "./EmployeeReducer";
import CountryReduce from "./CountryReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReduce,
  employeeStated: EmployeeReduce,
  countryStated: CountryReduce,
});

export default rootReducer;
