import React from 'react'


export default (props) => {
    
    const [events, setEvents] = React.useState(null);

    React.useEffect(() => {
        getEvents();
      }, []);

    const getEvents = async () => {
        const response = await fetch(`http://localhost:8000/events`);
        const result = await response.json();
        
        // Test console.log
        console.log(result);
        setEvents(result);
      };

    return (
        
                  <div>
                      <ul>
                      {events
        ? events.map((item) => {
            return (
             <li key={item._id}>
                    <h1>{item.title}</h1>
                    <p>Category: {item.category}</p>
                    <p>Date: {item.date}</p>
                    <p>Location: {item.location}</p>
             </li>
            )
            })
         : "This page is empty"
         } 
        </ul>
        </div>
    )
}

