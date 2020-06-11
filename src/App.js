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
  };

  // State to see if something is visible (like when hovering)
  const [isVisible, setIsVisible] = React.useState(false);

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

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/events/${id}`, {
      method: "DELETE"
    });
    getEvents(); // Update the list of events
  };

  const handleSelect = async (item) => {
    setEventToEdit(item);
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

  return (
    <>
      <h1>Turnout</h1>
      <ul>
        {events
          ? events.map((item, index) => {
            return (
              <li key={item._id}>{item.title}
                <br/>
                <button onClick={() => {handleSelect(item)}}>
                  Edit
                </button>
                <button onClick={() => {handleDelete(item._id)}}>
                  Delete
                </button>
                  <div className="eventSnippet">
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Location: {item.location}</p>
                  </div>
              </li>
            );
          })
          : "Loading..."
        }
      </ul>
      <h2>Create Event</h2>
      <Form initial={blank} handleSubmit={handleCreate}/>
      <h2>Edit Event</h2>
      <Form initial={eventToEdit} handleSubmit={handleEdit}/>
    </>
  );
}

export default App;
