import React from 'react'
import Moment from 'moment'

export default (props) => {

    const [formData, setFormData] = React.useState(props.initial)

    React.useEffect(() => {
        setFormData(props.initial);
    }, [props.initial])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }
    return (
        <>
        <div className="form-cont">
        <form>


        <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange}/><br/>
        <input type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange}/><br/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/><br/>
        <input type="password" name="passwordCheck" placeholder="Confirm Password" value={formData.passwordCheck} onChange={handleChange}/><br/>
        <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange}/><br/>
        <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange}/><br/>







        <button onClick={() => {
            props.handleSubmit(formData);
            setFormData(props.initial);
        }}>SUBMIT</button>
        </form>
        </div>
        </>
)

}