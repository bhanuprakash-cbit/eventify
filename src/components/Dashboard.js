import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
