// src/components/YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, releaseBot, deleteBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-cards">
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => releaseBot(bot)} onDelete={() => deleteBot(bot)} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
