import React from 'react'
import axios from 'axios'
import CardUser from './CardUser'
import {Link } from 'react-router-dom'

class User extends React.Component{
    constructor(){
        super()
        this.state = {
            user : []
        }
    }

    async componentDidMount(){
    await axios.get("http://localhost/reactapi/user.php")
    .then(response=>this.setState({
        user: response.data
    }))
    console.log(this.state)
    }

    render(){
        const renderData = this.state.user.map(user=>{
        return(
            <CardUser user={user} key={user.id}/>
            
        )
    })
    return(
        <div>
                <h5>Data User</h5>
                <Link to={'/addUser'} className="btn btn-dark">Tambah User</Link>
                <br />
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Nama</th>
                            <th scope='col'>Alamat</th>
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
export default User;
