import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Addusers = () => {
  let navigator = useNavigate()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  const { name, username, email, phone } = user;
  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user)
    navigator("/")
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>

        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name" value={name}
              onChange={onInputchange} />
          </div>

          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username" value={username}
              onChange={onInputchange} />
          </div>

          <div className="form-group">
            <input type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email" value={email}
              onChange={onInputchange} />
          </div>

          <div className="form-group">
            <input type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone" value={phone}
              onChange={onInputchange} />
          </div>

          <button className="btn btn-primary btn-block">ADD USER</button>
        </form>
      </div>
    </div>
  )
}


export default Addusers