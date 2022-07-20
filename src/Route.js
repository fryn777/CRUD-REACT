import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./MainLayout/Dashboard";
import RegionView from "./ViewApi/RegionView";
import EmployeeView from "./ViewApi/EmployeeView";
import CountrieView from "./ViewApi/CountrieView";
import LocationView from "./ViewApi/LocationView";
import DepartmentView from "./ViewApi/DepartmentView";
import DependentVIew from "./ViewApi/DependentView";
import JobView from "./ViewApi/JobView";
import Country from "./ViewSaga/Country";
import Region from "./ViewSaga/Region";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "region", element: <Region /> },
        { path: "employee", element: <EmployeeView /> },
        { path: "country", element: <Country /> },
        { path: "location", element: <LocationView /> },
        { path: "dependent", element: <DependentVIew /> },
        { path: "department", element: <DepartmentView /> },
        { path: "dependent", element: <DependentVIew /> },
        { path: "job", element: <JobView /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
