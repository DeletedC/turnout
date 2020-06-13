import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState({username: '', password: ''});

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSignUp = async (data) => {
        const response = await fetch(`http://localhost:8000/users/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        });
        console.log(data);
    }

    return (
        <>
            <h3>Name</h3>
            <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName} 
                onChange={handleChange}/>
            <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName} 
                onChange={handleChange}/>
            <br/>
            <h3>Username</h3>
            <input 
                type="text" 
                name="username"
                placeholder="Username" 
                value={formData.username} 
                onChange={handleChange}/>
            <h3>Password</h3>
            <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={formData.password} 
                onChange={handleChange}/>
                <br/>
            <input 
                type="password" 
                name="passwordCheck" 
                placeholder="Confirm Password"
                value={formData.passwordCheck} 
                onChange={handleChange}/>
                <br/>
            <button onClick={() => {
                handleSignUp(formData);
                }}>SUBMIT
            </button>
        </>
    )
}