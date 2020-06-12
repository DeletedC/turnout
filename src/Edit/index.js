import React, {Component} from "react";
import "../style.css";
import Form from "../form.js"
import MainNav from "../MainNav"

export default (props)=>{

     const [eventToEdit, setEvents] = React.useState({
        title: "",
        category: "",
        date: "",
        location: "",
        images: [],
        attendees: []
      });

      const getEvents = async () => {
        const response = await fetch('http://localhost:8000/events');
        const result = await response.json();
        
        // Test console.log
        console.log(result);
        setEvents(result);
      };

     const handleEdit = async (item) => {
        const response = await fetch(`http://localhost:8000/events/${item._id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        });
        getEvents(); // Update list of events
      };

    //   const handleSelect = async (item) => {
    //     setEventToEdit(item);
    //   };

      return (
        <div>
          {console.log(props)}
          <MainNav/>
          <h2>Edit Event</h2>
          <Form initial={props.location.state.item} handleSubmit={handleEdit}/>
        </div>
      )
}
