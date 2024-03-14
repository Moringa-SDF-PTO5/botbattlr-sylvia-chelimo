## Bot Battlr
Welcome to Bot Battlr. To view the app you can follow this link:
https://botbattlr-sylvia-chelimo.netlify.app/

# Setup

After unbundling the project:

1.  Run npm install in your terminal.
2. Run npm run server. This will run your backend on port 8002.
3. In a new terminal, run npm start. This will run your React app on port 8000.

Make sure to open http://localhost:8002/bots in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: http://localhost:8002
# Core Deliverables
As a user of Botbattlr, you should be able to:

1. See profiles of all bots rendered in BotCollection.
2. Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
3. Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.
4. Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.

# Endpoints for Core Deliverables
# GET /bots
Example Response:

```[
 {
"id": 101,
"name": "wHz-93",
"health": 94,
"damage": 20,
"armor": 63,
"bot_class": "Support",
"catchphrase": "1010010101001101100011000111101",
"avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
"created_at": "2018-10-02T19:55:10.800Z",
"updated_at": "2018-10-02T19:55:10.800Z"
 },

 {
"id": 102,
"name": "RyM-66",
"health": 86,
"damage": 36,
"armor": 77,
"bot_class": "Medic",
"catchphrase": "0110011100000100011110100110011000011001",
"avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
"created_at": "2018-10-02T19:55:10.827Z",
"updated_at": "2018-10-02T19:55:10.827Z"
 }
]
```
# Advanced Deliverables
These advanced deliverables are optional but recommended for further practice:

As a user, you should be able to:

1. Choose if you want to enlist a bot into your army or just see their data. Clicking on the card should instead display a show view (```BotSpecs```) for that bot, which should replace ```BotsCollection```. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.
2. Sort bots by their health, damage, or armor. For this, create a new component, ```SortBar```.
3. When you enlist a bot it will be removed from the BotCollection and added to ```YourBotArmy```.
4. Filter bots by their class. You can select multiple filters at the same time.
5. Only enlist one bot from each ```bot_class```. The available classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].
 
# Usage
To start using Botbattlr, follow the setup instructions mentioned above. After setting up the application, you can navigate through the interface to view available bots, add them to your army, release them.