import React, { useState, useEffect } from 'react'
import locationApi from '../api/locationApi'

export default function CountryEdit(props) {
    const [lcoation, setLocation] = useState([])

    useEffect(() => {
        locationApi.findOne(props.id.location_id).then(data => {
            setLocation(data)
        })
    },[])
    return (
        <div>
            <div>
                <h2>Edit Location</h2>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <label>Location ID : </label>
                        <input type="text" placeholder={lcoation.location_id}
                            onChange={props.handleOnChange('location_id')}/>
                    </div>
                    <div>
                        <label>Street Address : </label>
                        <input type="text" placeholder={lcoation.street_address}
                            onChange={props.handleOnChange('street_address')} />
                    </div>
                    <div>
                        <label>Postal Code : </label>
                        <input type="text" placeholder={lcoation.postal_code}
                            onChange={props.handleOnChange('postal_code')} />
                    </div>
                    <div>
                        <label>City : </label>
                        <input type="text" placeholder={lcoation.city}
                            onChange={props.handleOnChange('city')} />
                    </div>
                    <div>
                        <label>State Province : </label>
                        <input type="text" placeholder={lcoation.state_province}
                            onChange={props.handleOnChange('state_province')} />
                    </div>
                    <div>
                        <label>Country ID : </label>
                        <input type="text" placeholder={lcoation.country_id}
                            onChange={props.handleOnChange('country_id')} />
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
