import React, { useState } from 'react'
import PropTypes from 'prop-types'

function RegisterUser(props) {
    /* 
    -define func into parent
    -pass func as props to child tag in app.js
    -invoke func received through props to child component
    -Pass data from child as argument to props method received through props to child
    */
    const name = "Shardul Desai";
    // const user = {
    //     name: 'Shardul',
    //     email: 't@t.com',
    //     address: 'Pune',
    //     id: 321
    // }

    const [user, setUser] = useState({
        name: '',
        email: '',
        address: '',
        id: 0
    })
    return (
        <div>
            <label>ID:</label>
            <input type='number' value={user.id} onChange={(e) => setUser({ ...user, id: e.target.value })}></input> <br></br>
            <label>Name:</label>
            <input type='text' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}></input> <br></br>
            <label>Email:</label>
            <input type='text' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}></input> <br></br>
            <label>Address:</label>
            <input type='text' value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })}></input> <br></br>
            <button onClick={() => props.userInfo(user)}>Click here!!</button>
        </div >

    )
}

RegisterUser.propTypes = {

}

export default RegisterUser

