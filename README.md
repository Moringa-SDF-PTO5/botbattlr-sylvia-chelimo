# React Immersive Code Challenge: Bot Battlr
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:
![](https://camo.githubusercontent.com/00155c19ef35d18b483565b27f8c2410562b9f653bda741c2f9260c2ed1d8c1c/68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d322f70686173652d322d686f6f6b732d636f64652d6368616c6c656e67652d626f742d626174746c722f636865636b706f696e745f64656d6f2e676966)
Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.
# Instructions

For this project, you’ll be building out a React application that displays a list of available bots, among other features. Try your best to find the right places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.
# Setup

After unbundling the project:

1.  Run npm install in your terminal.
2. Run npm run server. This will run your backend on port 8002.
3. In a new terminal, run npm start. This will run your React app on port 8000.

Make sure to open http://localhost:8002/bots in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: http://localhost:8002
# Core Deliverables
As a user, I should be able to:
- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
render in the `YourBotArmy` component. The bot can be enlisted only **once**.
The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
`YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
"x", which would delete the bot both from the backend and from the
`YourBotArmy` on the frontend.
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
As a user, I should be able to:
- Choose if I want to enlist a bot into my army or just see their data. Clicking
on the card should instead display a show view (`BotSpecs`) for that bot,
which should replace `BotsCollection`. BotSpecs should have two buttons: one
to go back to the list view and another to enlist that bot. Your app could
look like the following:
![](https://camo.githubusercontent.com/72218bbea8a94e3c6c191161b3eaf1dd8ac40b2789ee86e6e5fc9a3f904b742c/68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d322f70686173652d322d686f6f6b732d636f64652d6368616c6c656e67652d626f742d626174746c722f66756c6c5f64656d6f2e676966)
- Sort bots by their health, damage or armor. For this, create a new component,
`SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added
to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component,
`SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are
`["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.
 