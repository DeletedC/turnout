import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";
// import Form from "./form.js"
import img from "./imgs/logo.png"
// import MainNav from "./MainNav/index"

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
        <h1>Organize from anywhere.</h1><br/>
        <h2>Find local gatherings you believe in.</h2>
      </header>
      <div>
          <img src={img} alt="Img" className="small-logo"/>
        </div>
      <ul className="event-list">
        {events? events.map((item) => {

            return (
              <div className="event-items">
              <div className="dropdown">
                <li key={item._id} className="listed-event"><Link to="./show">{item.title}</Link></li>
              <div class="dropdown-content">
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



