import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCountryRequest,
  DelCountryRequest,
} from "../Redux-saga/Action/CountryAction";

export default function Country() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countryStated);

  useEffect(() => {
    dispatch(GetCountryRequest());
  }, []);

  const onDelete = async (id) => {
    dispatch(DelCountryRequest(id));
  };

  return (
    <div>
      <h2>List of Country</h2>
      <table>
        <thead>Region Name</thead>
        <tbody>
          {countries &&
            countries.map((count) => {
              return (
                <tr>
                  <td>{count.country_id}</td>
                  <td>{count.country_name}</td>
                  <td>{count.region_id}</td>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this record")) {
                        onDelete(count.country_id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
