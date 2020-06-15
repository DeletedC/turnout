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
    const response = await fetch('https://turnout-nova-api.herokuapp.com/events');
    const result = await response.json();
    setEvents(result);
  };

  return (
    <>
      <header>
        <h1>Organize from anywhere.</h1><br/>
        <h2>Find local gatherings you believe in.</h2>
      </header>
      <div>
        <img src={img} alt="Img" className="small-logo"/>
      </div>
      <ul className="event-list">
        {events? events.map((item) => {

            return (
              <div key={item._id} className="event-items">
                <div className="dropdown">
                  <li className="listed-event"><Link to="./show">{item.title}</Link></li>
                  <div className="dropdown-content">
                    <p className="event-details">{item.category}</p>
                    <p className="event-details">{item.date}</p>
                    <p className="event-details">{item.location}</p>
                  </div>
                </div>
              </div>
            );
          })
          : <li>Loading...</li>
        }
      </ul>  
    </>
  );
}

export default App;