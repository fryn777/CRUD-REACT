import React,{useState,useEffect} from 'react'
import ChartForm from './ChartForm'

export default function ChartList() {
    const listChart = [
        {prodId : 1, prodName:'Dell', qty:1, salary:5000, Category : 'Laptop'},
        {prodId : 2, prodName:'Gamis', qty:1, salary:4000, Category : 'Baju'},
        {prodId : 3, prodName:'Xiaomi', qty:1, salary:6000, Category : 'Handphone'},
    ]
    const [carts, setCarts] = useState(listChart)
    const [Category] = useState(['Handphone','Laptop','Baju','Alat rumah tangga'])
    const [totalHrg, setTotalHrg] = useState(0)
    const [totalQty, setTotalQty] = useState(0)
    const [display,setDisplay] = useState(false)
    const [values, setValues] = useState({
        prodName : undefined,
        qty : 0,
        salary : 0,
        Category : undefined
    })
    useEffect(()=>{
        const TotalHarga = carts.reduce((sum, el) => sum + (el.salary * el.qty),0)
        setTotalHrg(TotalHarga)
        const TotalQuantity = carts.reduce((sum, el) => sum + el.qty,0)
        setTotalQty(TotalQuantity)
    },[carts])
    
    const handleChange = name => event =>{
        setValues({...values, [name] : event.target.value})
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        setCarts([...carts, {
            prodId : (Math.round(Math.random()*10)),
            prodName : values.prodName,
            qty : values.qty,
            salary : values.salary,
            Category : values.Category
        }])
        setDisplay(false)
    }
    const SelectOnChange = event =>{
        const value = event.target.selectedIndex != 0 ? 
        event.target.options[event.target.selectedIndex].value : null
        setValues({...values, Category : value})
    }
  return (
    <div>
        <div>
        <h2>List cartloyee</h2>
        <button onClick={()=> setDisplay(true)}> Add Product </button>
        {
            display ?  
            <ChartForm
                onSubmitForm = {onSubmit}
                handleOnChange = {handleChange}
                Category = {Category}
                SelectOnChange = {SelectOnChange}
                setDisplay = {setDisplay}
            />
            : 
            <>
                <table>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Salary</th>
                    <th>Category</th>
                    <th>Subtotal</th>
                    <tbody>
                        {
                            (carts || []).map(cart => (
                                <tr key={cart.prodId}>
                                    <td>{cart.prodId}</td>
                                    <td>{cart.prodName}</td>
                                    <td>{cart.qty}</td>
                                    <td>{cart.salary}</td>
                                    <td>{cart.Category}</td>
                                    <td>{cart.qty * cart.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h3>Total Salary : Rp. {totalHrg}</h3>
                <h3>Total Quantity : {totalQty}</h3>
            </>
        }
    </div>
    </div>
  )
}
