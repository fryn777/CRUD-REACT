import React, { useState, useEffect } from 'react'
import countryApi from '../api/countryApi'

export default function CountryEdit(props) {
    const [country, setCountrie] = useState([])

    useEffect(() => {
        countryApi.findOne(props.id.country_id).then(data => {
            setCountrie(data)
        })
    },[])
    return (
        <div>
            <div>
                <h2>Edit Region</h2>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>Country ID : </label>
                        <input type="text" placeholder={country.country_id}
                            onChange={props.handleOnChange('country_id')}/>
                    </div>
                    <div>
                        <label>Country Name : </label>
                        <input type="text" placeholder={country.country_name}
                            onChange={props.handleOnChange('country_name')} />
                    </div>
                    <div>
                        <label>Region Id : </label>
                        <input type="text" placeholder={country.region_id}
                            onChange={props.handleOnChange('region_id')} />
                    </div>
                    <div>
                        <button type='submit'> Simpan </button>
                        <button onClick={() => props.setDisplay(false)}> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
