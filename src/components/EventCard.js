import React from 'react'

const EventCard = ({event, onClick}) => {

  return (
    <div className='event-card' onClick={() => onClick(event)}>
        <h3>{event.name}</h3>
        <p>{event.date} | {event.location}</p>
    </div>
  )
};

export default EventCard
