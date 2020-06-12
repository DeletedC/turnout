import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState({username: '', password: ''});

const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]:event.target.value})
}

return (
    <>
        <h3>First Name</h3>
           <input type="text" name="first name" value={formData.username} onChange={handleChange}/>
        <h3>Last Name</h3>
            <input type="text" name="last name" value={formData.password} onChange={handleChange}/>
        <h3>Email</h3>
            <input type="text" name="email" value={formData.password} onChange={handleChange}/>
        <h3>Username</h3>
            <input type="text" name="user name" value={formData.password} onChange={handleChange}/>
        <h3>Password</h3>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            <button onClick={() => {
            props.handleSubmit(formData);
            }}>SUBMIT</button>
    </>
    )
}