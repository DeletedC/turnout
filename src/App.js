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
    //getEvents();
  }, []);

  // Get the events from the API
  const getEvents = async () => {
    //const response = await fetch(<----FILL IN API CALL HERE ---->);
    //const result = await response.json();
    //setEvents(result);
  };

  

  return (
    <>
      <h1>Turnout</h1>
    </>
  );
}

export default App;
