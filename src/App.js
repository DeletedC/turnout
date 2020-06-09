import React from "react";
import "./style.css";
import Form from "./form.js"

const App = (props) => {

  // State to hold all events
  const [events, setEvents] = React.useState(null);

  // State to hold the event the user wants to edit
  const [eventToEdit, setEventToEdit] = React.useState({
    title: "",
    category: "",
    date: "",
    location: "",
    images: [],
    attendees: []
  });

  // Holds blank form data
  const blank = {
    title: "",
    category: "",
    date: "",
    location: "",
    images: [],
    attendees: []
  }

  // Hook to get events when the component loads
  React.useEffect(() => {
    getEvents();
  }, []);

  // Get the events from the API
  const getEvents = async () => {
    const response = await fetch('http://localhost:8000/events');
    const result = await response.json();
    
    // Test console.log
    console.log(result);
    setEvents(result);
  };
  
  // Create a new event
  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/events', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    getEvents(); // Update the list of events
  };



  return (
    <>
      <h1>Turnout</h1>
      <ul>
        {events
          ? events.map((event) => {
            return (
              <li key={event._id}>{event.title}</li>
            );
          })
          : "Loading..."
        }
      </ul>
      <h1>create event</h1>
      <Form initial={blank} handleSubmit={handleCreate}/>
    </>
  );
}

export default App;
