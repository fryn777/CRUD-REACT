import React from 'react'

export default function ChartForm(props) {
  return (
    <div>
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Product Name : </label>
                <input type="text" placeHolder="Product Name" 
                onChange = {props.handleOnChange('prodName')}/>
            </div>
            <div>
                <label>Quantity : </label>
                <input type="number" placeHolder="Quantity" 
                onChange = {props.handleOnChange('qty')}/>
            </div>
            <div>
                <label>Salary : </label>
                <input type="text" placeHolder="Salary" 
                onChange = {props.handleOnChange('salary')}/>
            </div>
            <div>
                <label>Category : </label>
                <select onChange={props.SelectOnChange}>
                    <option>Choice Category</option>
                    {
                        props.Category.map((values,index) =>
                        <option key={index}>{values}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <button type='submit'> Simpan </button>
                <button onClick={()=>props.setDisplay(false)}> Cancel </button>
            </div>
        </form>
    </div>
  )
}
