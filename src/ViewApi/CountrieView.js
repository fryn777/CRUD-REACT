import React, { useState, useEffect } from "react";
import countryApi from "../api/countryApi";
import CountryAdd from "./CountryAdd";
import CountryEdit from "./CountryEdit";

export default function CountrieView() {
  const [country, setCountrie] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState({});
  const [values, setValues] = useState({
    country_id: "",
    country_name: "",
    region_id: "",
  });

  useEffect(() => {
    countryApi.list().then((data) => {
      setCountrie(data);
    });
    setRefresh(false);
  }, [refresh]);

  const handleOnChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onEdit = async () => {
    const payload = {
      country_id: id.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };

    await countryApi.update(payload).then(() => {
      setDisplayEdit(false);
      setRefresh(true);
      window.alert("Data Successfully Edit");
    });
  };
  const onSubmit = async () => {
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };

    await countryApi.create(payload).then(() => {
      setDisplay(false);
      setRefresh(true);
      window.alert("Data Successfully Insert");
    });
  };
  const onDelete = async (id) => {
    countryApi.deleted(id).then(() => {
      setRefresh(true);
      window.alert("Data Successfully Delete");
    });
  };

  const onClick = (country_id) => {
    setDisplayEdit(true);
    setId(country_id);
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {displayEdit ? (
          <CountryEdit
            onSubmit={onEdit}
            handleOnChange={handleOnChange}
            id={id}
            setDisplay={setDisplayEdit}
          />
        ) : display ? (
          <CountryAdd
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
              Add Country{" "}
            </button>
            <table className="border-collapse border border-slate-300  w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 border-collapse border border-slate-300"
                  >
                    Country ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-collapse border border-slate-300"
                  >
                    Country Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-collapse border border-slate-300"
                  >
                    Region Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-collapse border border-slate-300"
                  >
                    Setting
                  </th>
                </tr>
              </thead>
              <tbody className="overscroll-auto md:overscroll-contain">
                {country &&
                  country.map((count) => (
                    <tr
                      key={count.country_id}
                      className="border-collapse border border-slate-300 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className=" border-collapse border border-slate-300 px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {count.country_id}
                      </td>
                      <td className="px-6 py-2 border-collapse border border-slate-300">
                        {count.country_name}
                      </td>
                      <td className="px-6 py-2 border-collapse border border-slate-300">
                        {count.region_id}
                      </td>
                      <td className="px-6 py-2 border-collapse border border-slate-300">
                        <td className="py-2">
                          <button
                            type="button"
                            className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => onDelete(count.country_id)}
                          >
                            Delete
                          </button>
                        </td>
                        <button
                          type="button"
                          className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() =>
                            onClick({ country_id: count.country_id })
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
