import React from 'react'
import Moment from 'moment'

export default (props) => {
    const event = props.location.state.item;
    return (
        <div>
            {event
                ? <>
                    <h1>{event.title}</h1>
                    <p>Category: {event.category}</p>
                    <p>Date: {Moment(event.date).format("dddd, MMMM Do, h:mm a")}</p>
                    <p>Location: {event.location}</p>
                  </>
                : <h1>Event Not Found</h1>
            }
        </div>
    );
}

