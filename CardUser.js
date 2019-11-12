import React from 'react'
import {Link } from 'react-router-dom' 

function CardUser({user}){
    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th scope="row">{<Link className="btn btn-dark" to={'/editUser/' + user.id}>Edit</Link>}</th>
        </tr>
    )
}

export default CardUser