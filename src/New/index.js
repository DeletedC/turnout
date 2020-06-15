import React from "react";
import "../style.css";
import Form from "../form.js"
import { useHistory } from 'react-router-dom';


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
    const response = await fetch('https://turnout-nova-api.herokuapp.com/events');
    const result = await response.json();

    setEvents(result);
  };

  // Create a new event
  const handleCreate = async (data) => {
    await fetch('https://turnout-nova-api.herokuapp.com/events', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    getEvents(); // Update the list of events
    history.push("/");
    
  };

  return (
    <body className="create-container">
      <div class="create-page">
        <h2 className="create-title">Planning an event?</h2>
        <h3 className="second-title">We're here to help.</h3>
        <p className="create-descrip">Holding a vigil or a march? Is the march on foot or bike-centric?<br/> Use this form to create your gathering.</p>
        <div className="create-event">
          <Form initial={blank} handleSubmit={handleCreate}/>
        </div>
      </div>
    </body>
  )
}