import React from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import {Link } from 'react-router-dom'

class product extends React.Component{
    constructor(){
        super()
        this.state = {
            product : []
        }
    }
    async componentDidMount(){
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
    }))
    console.log(this.state)
    }
    render(){
        const renderData = this.state.product.map(product=>{
            return(
                <CardProduct product={product} key={product.product_id}/>
                
            )
        })
    return(
        <div>
                <h5>Data Barang</h5>
                <Link to={'/addProduct'} className="btn btn-dark">Tambah Product</Link>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID Barang</th>
                            <th scope='col'>Nama Barang</th>
                            <th scope='col'>Harga Barang</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </table>
            </div>
    )
}
}
export default product;
