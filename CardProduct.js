import React from 'react'
import {Link } from 'react-router-dom'
function CardProduct({product}){
    return(
        <tr>
            <th scope="row">{product.product_id}</th>
            <th scope="row">{product.product_name}</th>
            <th scope="row">{product.product_price}</th>
            <th scope="row">{<Link className="btn btn-dark" to={'/editProduct/' + product.product_id}>Edit</Link>}</th>
        </tr>
    )
}

export default CardProduct;