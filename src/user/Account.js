import React from 'react'
import { Link } from 'react-router-dom';
// import SocialFollow from "../SocialFollow"
import Moment from 'moment'

export default (props) => {

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

  const handleDelete = async (id) => {
    await fetch(`https://turnout-nova-api.herokuapp.com/events/${id}`, {
      method: "DELETE"
    });
    getEvents(); // Update the list of events
  };


    return(
        <div className="account-container">
          <div className="account-page">
          <h2 className="account-title">Welcome back.</h2>
     <h3 className="second-title">Here you can edit and delete your events.</h3>
      </div>
            <ul className="acct-event-list">
    {events
        ? events.map((item) => {

            return (
            <div key={item._id} className="event-items">
                <li className="listed-event">
                    <Link to={{pathname: "/show", state: {item}}}>
                        {item.title}
                    </Link>
                    <br/>
                    <div className="edit-event-details">
                        <p>{item.category}</p>
                        <p>{item.date}</p>
                        <p>{item.location}</p>
                    </div>
                    <button>
                        <Link to={{pathname: '/edit', state: {item}}}>
                        Edit
                        </Link>
                    </button>
                    <button onClick={() => {handleDelete(item._id)}}>
                        Delete
                    </button>
                </li>
            </div>
            );
        return (
          <div className="event-items">
            <li key={item._id} className="listed-event"><Link to="/show">{item.title}</Link>
              <br/>
                <div className="edit-event-details">
                <p>{item.category}</p>
                <p>{Moment(item.date).format("dddd, MMMM Do, h:mm a")}</p>
                <p>{item.location}</p>
                </div>
            <button>
              <Link to={{pathname: '/edit', state: {item}}}>
                Edit
              </Link>
            </button>
            <button onClick={() => {handleDelete(item._id)}}>
                Delete
            </button>
          </li>
        </div>
        );
        })
        : "Loading..."
    }
    </ul>
{/*     <SocialFollow/> */}
        </div>
        
    )
}
