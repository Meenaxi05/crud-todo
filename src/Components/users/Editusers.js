import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
  let navigate = useNavigate()

  const { id } = useParams()
  // alert(id)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  const { name, username, email, phone } = user;
  const onInputchange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loaduser()
  }, [])
  
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user)
    navigate("/")
  }

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>

        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name" value={name}
              onChange={e => onInputchange(e)} />
          </div>

          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username" value={username}
              onChange={e => onInputchange(e)}/>
          </div>

          <div className="form-group">
            <input type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email" value={email}
              onChange={e => onInputchange(e)} />
          </div>

          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone" value={phone}
              onChange={e => onInputchange(e)} />
          </div>

          <button className="btn btn-primary btn-block">UPDATE USER</button>
        </form>
      </div>
    </div>
  )
}


export default Editusers