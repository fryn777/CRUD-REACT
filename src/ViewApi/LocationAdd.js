import React from 'react'

export default function LocationAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Street Address</label>
                <input type="text" placeholder="Street Address" 
                onChange = {props.handleOnChange('street_address')}/>
            </div>
            <div>
                <label>Postal Code : </label>
                <input type="text" placeholder="Postal Code" 
                onChange = {props.handleOnChange('postal_code')}/>
            </div>
            <div>
                <label>City : </label>
                <input type="text" placeholder="City" 
                onChange = {props.handleOnChange('city')}/>
            </div>
            <div>
                <label>State Province : </label>
                <input type="text" placeholder="State Province" 
                onChange = {props.handleOnChange('state_province')}/>
            </div>
            <div>
                <label>Country ID : </label>
                <input type="text" placeholder="Country ID" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
