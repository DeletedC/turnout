import React, {Component} from "react";
import "../style.css";
import Form from "../form.js"
import { Link, useHistory, Redirect } from 'react-router-dom';


export default (New)=>{

    const history = useHistory();

    const [events, setEvents] = React.useState(null);
    const blank = {
        title: "",
        category: "",
        date: "",
        location: "",
        images: [],
        attendees: []
      };

      const getEvents = async () => {
        const response = await fetch('http://localhost:8000/events');
        const result = await response.json();
        
        // Test console.log
        console.log(result);
        setEvents(result);
      };

     /// / Create a new event
  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/events', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    getEvents(); // Update the list of events
    console.log(response);
    history.push("/");
    
  };
      return (
          <div>
     <h2 className="center">Create Event</h2>
      <Form initial={blank} handleSubmit={handleCreate}/>
      </div>
      )
}
