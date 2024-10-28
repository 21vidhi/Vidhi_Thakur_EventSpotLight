import { useState } from "react";
import "./App.css";
import events from "./data/events";
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";

function App() {
  const [filteredEvent, setFilteredEvent] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (query) => {
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvent(filtered);
  };

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />

      <div className="event-list">
        {filteredEvent.map((event) => (
          <EventCard key={event.id} event={event} onClick={openModal} />
        ))}
      </div>

      <EventModal event={selectedEvent} onClose={closeModal} />

      {/* Footer Component */}
      <footer className="footer">
        © 2024 EventSpot Lite. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
