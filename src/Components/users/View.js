import React,{useState, useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })
 
    const {id} = useParams()
     useEffect(()=> {
        loaduser()
     }, [])

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3000/users/${id}`)
setUser(result.data)
    }

    return(
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {user.name}</li>
          <li className="list-group-item">user name: {user.username}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li className="list-group-item">phone: {user.phone}</li>
        </ul>
      </div>
    )
}

export default View