// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    // Fetch bots from API (GET /bots) and update state
    // You can use the provided example response or an actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('https://botbattlr-sylvia-chelimo.onrender.com/bots'); // replace with your actual API endpoint
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData();
  }, []);

  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!yourBotArmy.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    // Remove the bot from YourBotArmy
    const updatedArmy = yourBotArmy.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  const deleteBot = async (bot) => {
    // Simulate DELETE /bots/:id
    try {
      await fetch(`https://botbattlr-sylvia-chelimo.onrender.com/bots ${bot.id}`, { method: 'DELETE' }); // replace with your actual API endpoint
      // Update state or refetch bots if needed
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Bot Battlr</h1>
      <div className="bot-sections">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy army={yourBotArmy} releaseBot={releaseBot} deleteBot={deleteBot} />
        {selectedBot && (
          <BotSpecs
            bot={selectedBot}
            back={() => setSelectedBot(null)}
            enlist={() => {
              // Handle enlist action
              enlistBot(selectedBot);
              setSelectedBot(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
