import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const MainView = (props) => {

    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPetList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // const deleteHandler = (idFromBelow) => {
    //     axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
    //     .then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //         setPetList(petList.filter((pet) => pet._id !== idFromBelow));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

    return (
        <div>
            <header>
                <div className='nav'>
                    <h1>Pet Shelter</h1>
                    <Link to={"/pets/new"}>Add a new Pet</Link>
                </div>

            <h2>These pets are looking for a new home!</h2>
            </header>
            <table style={{margin: "auto", border: "1px solid black"}}>
                <thead style={{backgroundColor: "lightgray", color: "white"}}>
                    <th>Pet Name: </th>
                    <th>Pet Type: </th>
                    <th>Pet Skills: </th>
                    <th>Pet Description: </th>
                </thead>
                <tbody>
                    {
                        petList.map((pet, i) => (
                            <tr key={i}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td>{pet.petSkills}</td>
                                <td>{pet.petDescription}</td>
                                <td>
                                    <button onClick={()=>{navigate(`/pets/${pet._id}`)}}>Details</button>
                                    <button onClick={()=>{navigate(`/${pet._id}/edit`)}}>Edit</button> 
                                </td>   
                            </tr>
                        )
                    )}
                    
                </tbody>
            </table>

        </div>
    );
};

export default MainView;