import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";
import img from "./imgs/logo.png"

const App = (props) => {


  // State to hold all events
  const [events, setEvents] = React.useState(null);

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
      <header>
        <h1>Organize from anywhere.<br/> Find local gatherings you believe in.</h1>
      </header>
      <ul>
        {events? events.map((item) => {

            return (
              <li key={item._id}><Link to="./show">{item.title}</Link>
                <br/>
                  <div className="eventSnippet">
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Location: {item.location}</p>
                  </div>
              </li>
            );
          })
          : <li>Loading...</li>
        }
      </ul>
      <div className="event-handlers">
        <div>
          <img src={img} alt="Img"/>
        </div>
      </div>
    </>
  );
}

export default App;
