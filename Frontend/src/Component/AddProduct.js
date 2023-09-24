import React from "react";

const Addproduct = () =>{

    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [error,setError] = React.useState(false)
    const addProductFun= async()=>{
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method:'post',
            body:JSON.stringify({name , price , category , company , userId }),
            headers:{
                "content-Type":"application/json"
            }
        });
        result = await result.json();
        // console.log(result);

       
    }
    return (
        <div className="product">
            <h1>ADD Product</h1>
            <input type="text"  className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name"/>
            {error && !name && <span className="invalid-input">Enter valid name</span>}
            <input type="text"  className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price"/>
            {error && !price && <span className="invalid-input">Enter valid price</span>}
            <input type="text"  className="inputBox" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product category"/>
            {error && !category && <span className="invalid-input">Enter valid category</span>}
            <input type="text"  className="inputBox" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company"/>
            {error && !company && <span className="invalid-input">Enter valid company</span>}
            <button onClick={addProductFun} className="btn">Add product</button>

        </div>
    )

}
export default Addproduct;