import React from 'react'

export default function CountryAdd(props) {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <div>
                <label>Country ID : </label>
                <input type="text" placeholder="Country ID" 
                onChange = {props.handleOnChange('country_id')}/>
            </div>
            <div>
                <label>Country Name : </label>
                <input type="text" placeholder="Country Name" 
                onChange = {props.handleOnChange('country_name')}/>
            </div>
            <div>
                <label>Region ID : </label>
                <input type="text" placeholder="Region ID" 
                onChange = {props.handleOnChange('region_id')}/>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
