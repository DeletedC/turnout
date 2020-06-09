import React from 'react'

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
    <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange}/><br/>
    <input type="text" name="category" placeholder="category" value={formData.category} onChange={handleChange}/><br/>
    <input type="text" name="date" placeholder="date" value={formData.date} onChange={handleChange}/><br/>
    <input type="text" name="location" placeholder="location" value={formData.location} onChange={handleChange}/><br/>
    <button onClick={() => {
        props.handleSubmit(formData);
        setFormData(props.initial);
    }}>SUBMIT</button>
    </>
)

}