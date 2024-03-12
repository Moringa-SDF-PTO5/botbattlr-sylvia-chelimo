// src/components/BotCard.js
import React from 'react';

const BotCard = ({ bot, onClick, onDelete }) => {
  const { name, bot_class, health, damage, armor, avatar_url } = bot;

  return (
    <div className="bot-card" onClick={onClick}>
      <img alt={name} src={avatar_url} />
      <h3>{name}</h3>
      <p>{bot_class}</p>
      <div className="bot-icons">
        <div className="icon-container">
          <i className="icon large circular red heartbeat" />
          <strong>{health}</strong>
        </div>
        <div className="icon-container">
          <i className="icon large circular yellow lightning" />
          <strong>{damage}</strong>
        </div>
        <div className="icon-container">
          <i className="icon large circular blue shield" />
          <strong>{armor}</strong>
        </div>
      </div>
      <button className="delete-btn" onClick={(e) => onDelete(e)}>
        X
      </button>
    </div>
  );
};

export default BotCard;
