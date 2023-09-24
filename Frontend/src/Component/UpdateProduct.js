import React, { useEffect } from "react";
import { useParams,useNavigate} from "react-router-dom";
const UpdateProduct = () =>{

    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
  
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])
    const getProductDetails = async()=>{
        // console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();

        console.log(result);

        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
        
    }
    const updateProduct = async()=>{
       
        console.warn(name,price ,category,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "content-Type":"application/json"
            }
        });
        result = await result.json()
        console.log(result);
        navigate('/')
       
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text"  className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name"/>
          
            <input type="text"  className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price"/>
            <input type="text"  className="inputBox" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product category"/>
            <input type="text"  className="inputBox" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company"/>
            <button onClick={updateProduct} className="btn">Update product</button>

        </div>
    )

}
export default  UpdateProduct;