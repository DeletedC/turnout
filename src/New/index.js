import React, {Component} from "react";
import "../style.css";
import Form from "../form.js"
<<<<<<< HEAD
import MainNav from "../MainNav"
import logo from "../imgs/logo-name.png"
=======
import { Link, useHistory, Redirect } from 'react-router-dom';

>>>>>>> 6aaaf67f976ad1b39d6d9854dc435e37674d6f6e

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
          <body className="create-container">
            <header>
                <img src={logo} alt="Logo"/>
            </header>
              <MainNav/>
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
