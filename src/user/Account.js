import React from 'react'
import MainNav from '../MainNav/index.js'
import { Link } from 'react-router-dom';
// import SocialFollow from "../SocialFollow"


export default (props) => {

    // State to hold all events
  const [events, setEvents] = React.useState(null);

  // State to hold the event the user wants to edit
  const [eventToEdit, setEventToEdit] = React.useState({
    title: "",
    category: "",
    date: "",
    location: "",
    images: "",
    attendees: []
  });


  // State to see if something is visible (like when hovering)
  const [isVisible, setIsVisible] = React.useState(false);

  // // Hook to get events when the component loads
  React.useEffect(() => {
    getEvents();
  }, []);

  // Get the events from the API
  const getEvents = async () => {
    const response = await fetch('https://turnout-nova-api.herokuapp.com/events');
    const result = await response.json();
    
    // Test console.log
    console.log(result);
    setEvents(result);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`https://turnout-nova-api.herokuapp.com/events/${id}`, {
      method: "DELETE"
    });
    getEvents(); // Update the list of events
  };

  const handleSelect = async (item) => {
    setEventToEdit(item);
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
  };

    return(
        <div>
            <ul>
    {events
        ? events.map((item) => {
        return (
            <li key={item._id}><Link to="/show">{item.title}</Link>
            <br/>
            <button>
                <Link to={{pathname: '/edit', state: {item}}}>
                Edit
                </Link>
            </button>
            <button onClick={() => {handleDelete(item._id)}}>
                Delete
            </button>
                <div>
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
{/*     <SocialFollow/> */}
        </div>
        
    )
}
