import React from 'react'

export default (props) => {

    const event = props.location.state.item;

    return (
        <div>
            {event
                ? <>
                    <h1>{event.title}</h1>
                    <p>Category: {event.category}</p>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                  </>
                : <h1>Event Not Found</h1>
            }
        </div>
    );
};

