# Winky's Obstacle Challenge Bot
- You can use both `!` and `.` as command prefix
- Don't forget to change the admin passwords before hosting the bot, there are four passwords at the beginning of the code. Passwords can have any character except space.
- This bot is based on my haxball bot version 6.2.1, you can find its full documentation here: https://github.com/uzayyli/Haxball-Headless-Bot
- This version (for the Winky parkour map) has not been fully tested yet. Please let me know if you encounter any bugs.

# Command List
- `!help` shows detailed information about all available commands
- `!admin [password] [hidden]` gives you admin privileges. If the second argument exists, you will become a hidden admin
- `!finish` saves your name in the leaderboard, if you have finished the map
- `!top` shows the leaderboard
- `!restart` sends you back to the first level

# Admin Command List
- `!setadminlevel [player] [level]` gives another player admin privileges, level cannot be greater than your own admin level.
- `!tp [target]` teleports you to a specified level number or player name. Needs at least admin level 2
- `!tpplayer [player] [target]` teleports a certain player to a point or another player. Needs at least admin level 3
- `!mute [playerName] [minutes]` blocks a player from sending chat messages for the specified amount of minutes. Set minutes to zero to unmute player

# Setup
- How to host a Haxball headless bot script on your computer: https://haxmods.com/blog/how-to-host-a-haxball-headless-bot-script-on-your-computer/
