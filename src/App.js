import React from "react";
import "./style.css";

const App = (props) => {

  // State to hold all events
  const [events, setEvents] = React.useState(null);

  // State to hold the event the user wants to edit
  const [eventToEdit, setEventToEdit] = React.useState({
    // Add blank event form data here
  });

  // Holds blank form data
  const blank = {
    // Add blank event form data here
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
    </>
  );
}

export default App;
