import React from 'react';
import tkt from '../data/assets/Ticket.jpg';
import '../styles/ticket.css';

const Ticket = () => {
  return (
    <div className='ticket'>
      <h1>Ticket</h1>
      <a>
        <img
          src={tkt} 
          alt="Ticket"
          className="ticket-image"
        />
      </a>
    </div>
  );
};

export default Ticket;
