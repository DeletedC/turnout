import React from "react";
import "./style.css";
import MainNav from "./MainNav"
import SocialFollow from "./SocialFollow"

const App = (props) => {

  const [events, setEvents] = React.useState(null)

  // // Hook to get events when the component loads
  React.useEffect(() => {
    getEvents();
  }, []);

  /// Get the events from the API
  const getEvents = async () => {
    const response = await fetch('http://localhost:8000/events');
    const result = await response.json();
    
    // Test console.log
    console.log(result);
    setEvents(result);
  };
  

  
  return (
    <>
    <MainNav/>
      <h1>Turnout</h1>
      <ul>
        {events
          ? events.map((item) => {
            return (
              <li key={item._id}>
                    <p>{item.title}</p>
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Location: {item.location}</p>
                
              </li>
            );
          })
          : "Loading..."
        }
      </ul>
      <SocialFollow />
    </>
  );
}

export default App;
