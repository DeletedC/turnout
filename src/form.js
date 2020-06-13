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
    const thisMonth = () => {
        const month = Moment().month() + 1
        if(month < 10){
            return '0' + month
        } else {
            return month
        }
    }
    const thisDay = () => {
        const day = Moment().toDate().toDateString()
        let parsed = day.split(' ')
        return parsed[2]
    }
    return (
        <>
        <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange}/><br/>
        <input type="text" name="category" placeholder="category" value={formData.category} onChange={handleChange}/><br/>
        <input min={`2020-${thisMonth()}-${thisDay()}`} max="2021-01-01" type="date" name="date" placeholder="date" value={formData.date} onChange={handleChange}/><br/>
        <input type="text" name="location" placeholder="location" value={formData.location} onChange={handleChange}/><br/>
        <button onClick={() => {
            props.handleSubmit(formData);
            setFormData(props.initial);
        }}>SUBMIT</button>
        </>
)

}