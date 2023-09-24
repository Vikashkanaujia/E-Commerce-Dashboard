import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    // console.warn(products);

    const deleteproduct = async(id) => {
        // console.log(id);
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        result = await result.json()
        if(result){
            // console.log(result);
            getProducts();
        }
       
    }
    return (
        <div className="product-list">
            <h3>Product List</h3>
            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteproduct(item._id)}>Delete</button>
                        <Link to={"/update/"+ item._id}>Update</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}
export default ProductList;