import Event from "./Event";

const EventList = ({ events }) => {
 return (
   <ul id="event">
     {events ?
       events.map(event => <Event key={event.id} event={event} />) :
       null}
   </ul>
 );
}

export default EventList;