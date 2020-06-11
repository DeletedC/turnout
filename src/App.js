import React from "react";
import "./style.scss";
import Form from "./form.js"
import logo from "./imgs/logo-name.png"
import img from "./imgs/logo.png"

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
      <header>
        <img src={logo} alt="Logo"/>
      <h1>Organize from anywhere.<br/> Find local gatherings you believe in.</h1>
      </header>
      <ul>
        {events
          ? events.map((item) => {
            return (
              <li key={item._id}

                // Show event information when hovering over the title
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}>{item.title}
                <br/>
                <button onClick={() => {handleSelect(item)}}>
                  Edit
                </button>
                <button onClick={() => {handleDelete(item._id)}}>
                  Delete
                </button>

                {/*If isVisible is true, render the detailed event info */}
                {isVisible && (
                  <div>
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Location: {item.location}</p>
                  </div>
                )}
              </li>
            );
          })
          : "Loading..."
        }
      </ul>
      <div class="event-handlers">
        <div id="create-event">
      <h2 class="create">Create Event</h2>
      <Form initial={blank} handleSubmit={handleCreate}/>
      </div>
      <div>
        <img src={img} alt="Img"/>
      </div>
      <div id="edit-event">
      <h2 class="edit">Edit Event</h2>
      <Form initial={eventToEdit} handleSubmit={handleEdit}/>
      </div>
      </div>
    </>
  );
}

export default App;
