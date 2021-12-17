import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const NewView = (props) => {
    const [errors, setErrors] = useState({});
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petSkill_1, setPetSkill_1] = useState("");
    const [petSkill_2, setPetSkill_2] = useState("");
    const [petSkill_3, setPetSkill_3] = useState("");
    const [petDescription, setPetDescription] = useState("");


    const newSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/pets`, 
        { 
            petName,
            petType,
            petSkill_1,
            petSkill_2,
            petSkill_3,
            petDescription
             })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
                
            <div className="nav">             
                    <h1>Pet Shelter</h1>
                    <Link to={"/"}>back to home</Link>
            </div>
            <h2>Know a pet that needs a home?</h2>
                <div className="container">
            <form onSubmit={newSubmitHandler}>
                    <div>
                    <label>Pet Name:</label>
                    <input
                    onChange={(e) => setPetName(e.target.value)}
                    name="petName"
                    value={petName}
                    />
                    {errors.petName ? <span>{errors.petName.message}</span> : null}
                    </div>
                    <div>
                    <label>Pet Type:</label>
                    <input
                    onChange={(e) => setPetType(e.target.value)}
                    name="petType"
                    value={petType}
                    />
                    {errors.petType ? <span>{errors.petType.message}</span> : null}
                    </div>
                <div>
                <label>Pet Description:</label>
                <input
                onChange={(e) => setPetDescription(e.target.value)}
                name="petDescription"
                value={petDescription}
                />
                {errors.petDescription ? <span>{errors.petDescription.message}</span> : null}
                </div>
                
                <div>
                <label>Pet Skill 1:</label>
                <input
                onChange={(e) => setPetSkill_1(e.target.value)}
                name="petSkill_1"
                value={petSkill_1}
                />
                {errors.petSkill_1 ? <span>{errors.petSkill_1.message}</span> : null}
                </div>
                <div>
                <label>Pet Skill 2:</label>
                <input
                onChange={(e) => setPetSkill_2(e.target.value)}
                name="petSkill_2"
                value={petSkill_2}
                />
                {errors.petSkill_2 ? <span>{errors.petSkill_2.message}</span> : null}
                </div>
                <div>
                <label>Pet Skill 3:</label>
                <input
                onChange={(e) => setPetSkill_3(e.target.value)}
                name="petSkill_3"
                value={petSkill_3}
                />
                {errors.petSkill_3 ? <span>{errors.petSkill_3.message}</span> : null}
                </div>               
                <button>Add Pet</button>
                
            </form>
                </div>
        </div>
    );
};

export default NewView;