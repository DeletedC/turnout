import React, {Component} from "react";
import "../style.css";
import Form from "../form.js"
import { Link, useHistory, Redirect } from 'react-router-dom';


export default (props)=>{

    const history = useHistory()


     const [eventToEdit, setEvents] = React.useState({
        title: "",
        category: "",
        date: "",
        location: "",
        images: [],
        attendees: []
      });

      const getEvents = async () => {
        const response = await fetch('https://turnout-nova-api.herokuapp.com/events');
        const result = await response.json();
        
        // Test console.log
        console.log(result);
        setEvents(result);
      };

     const handleEdit = async (item) => {
        const response = await fetch(`https://turnout-nova-api.herokuapp.com/events/${item._id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
        getEvents(); // Update list of events
        history.push("/")
      };

    //   const handleSelect = async (item) => {
    //     setEventToEdit(item);
    //   };

      return (
        <body className="edit-container">
          <div className="edit-page">
          {console.log(props)}
          <h2 className="edit-title">Edit Your Event</h2>
          <p className="edit-descrip">Make any necessary changes to your event here.</p>
          <div className="edit-event">
          <Form initial={props.location.state.item} handleSubmit={handleEdit}/>
          </div>
          </div>
        </body>
        
      )
}
