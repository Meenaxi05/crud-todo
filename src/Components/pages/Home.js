import React, { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  // we have created a function where it will return a data ,( it is a functional componenmet 
  // we can also create a func , but its a technique of es6) 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users")
    setUsers(result.data.reverse())
  }

  const deletuser = async id => {
    await axios.delete(`http://localhost:3000/users/${id}`)
    loadUsers()
  }


  return (

    // className? why not nly class, in react it will get confuse betw java oops concept for class.
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <Link class="btn btn-danger mr-2" onClick={() => deletuser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}



export default Home;