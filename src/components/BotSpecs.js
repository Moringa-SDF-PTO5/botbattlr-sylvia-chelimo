// src/components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, back, enlist }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name} Details</h2>
      <div>
        <strong>Health:</strong> {bot.health} <i className="fas fa-heart"></i>
      </div>
      <div>
        <strong>Damage:</strong> {bot.damage} <i className="fas fa-bolt"></i>
      </div>
      <div>
        <strong>Armor:</strong> {bot.armor} <i className="fas fa-shield-alt"></i>
      </div>
      {/* Add other bot details as needed */}
      <button onClick={back}>Go Back</button>
      <button onClick={enlist}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
