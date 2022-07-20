import React, { useState, useEffect } from "react";
import locationApi from "../api/locationApi";
import LocationAdd from "./LocationAdd";
import LocationEdit from "./LocationEdit";

export default function LocationView() {
  const [location, setLocation] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState({});
  const [values, setValues] = useState({
    location_id: undefined,
    street_address: "",
    postal_code: "",
    city: "",
    state_province: "",
    country_id: "",
  });
  useEffect(() => {
    locationApi.list().then((data) => {
      setLocation(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onEdit = async () => {
    const payload = {
      location_id: id.location_id,
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };

    await locationApi.update(payload).then(() => {
      setDisplayEdit(false);
      setRefresh(true);
      window.alert("Data Successfully Edit");
    });
  };
  const onSubmit = async () => {
    const payload = {
      street_address: values.street_address,
      postal_code: values.postal_code,
      city: values.city,
      state_province: values.state_province,
      country_id: values.country_id,
    };

    await locationApi.create(payload).then(() => {
      setDisplay(false);
      setRefresh(true);
      window.alert("Data Successfully Insert");
    });
  };
  const onDelete = async (id) => {
    locationApi.deleted(id).then(() => {
      setRefresh(true);
      window.alert("Data Successfully Delete");
    });
  };
  const onClick = (location_id) => {
    setDisplayEdit(true);
    setId(location_id);
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {displayEdit ? (
          <LocationEdit
            onSubmit={onEdit}
            handleOnChange={handleOnChange}
            id={id}
            setDisplay={setDisplayEdit}
          />
        ) : display ? (
          <LocationAdd
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <button
              type="button"
              className="cursor-pointer inline-flex justify-center border py-2 px-2 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setDisplay(true)}
            >
              {" "}
              Add Location{" "}
            </button>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Location ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Street Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Postal Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    State Province
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Country ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Setting
                  </th>
                </tr>
              </thead>
              <tbody className="overscroll-auto md:overscroll-contain">
                {location &&
                  location.map((loca) => (
                    <tr
                      key={loca.location_id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {loca.location_id}
                      </td>
                      <td className="px-6 py-2">{loca.street_address}</td>
                      <td className="px-6 py-2">{loca.postal_code}</td>
                      <td className="px-6 py-2">{loca.city}</td>
                      <td className="px-6 py-2">{loca.state_province}</td>
                      <td className="px-6 py-2">{loca.country_id}</td>
                      <td className="px-6 py-2">
                        <td className="py-2">
                          <button
                            type="button"
                            className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => onDelete(loca.location_id)}
                          >
                            Delete
                          </button>
                        </td>
                        <button
                          type="button"
                          className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() =>
                            onClick({ location_id: loca.location_id })
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
