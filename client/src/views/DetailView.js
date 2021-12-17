import { Link, navigate } from '@reach/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const DetailView = (props) => {
    const {id} = props;
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <div className= "nav">
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            </div>
            <div className="nav">
            <h2>Details about: {pet.petName} </h2>
            <button onClick={()=>deleteHandler(pet._id)}>Adopt {pet.petName}</button>
            </div>
            <hr/>
            <h2>Pet Type: </h2>
            <p>  {pet.petType}</p>
            <h2>Description: </h2>
            <p>  {pet.petDescription}</p>
            <h2>Skills: </h2>
            
            <p>{pet.petSkill_1}</p>
            <p>{pet.petSkill_2}</p>
            <p>{pet.petSkill_3}</p>

        </div>
    );
};

export default DetailView;