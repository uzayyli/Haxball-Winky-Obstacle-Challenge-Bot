# Winky's Obstacle Challenge Bot
- Don't forget to change the admin passwords before hosting the bot, there are four passwords at the beginning of the code. Passwords can have any character except space.
- This bot is intended to host three parkour maps, and is based on my haxball bot version 6.2.1. You can find its full documentation here: https://github.com/uzayyli/Haxball-Headless-Bot
- Added jakjus cake and mountains maps
- This version (for parkour maps) has not been fully tested yet. Please let me know if you encounter any bugs.
- If you used v1.2 before, it's safe to remove `leaderBoard_*` keys from localStorage, v1.3 only uses `localStorage.uzy_parkour` object

# Command List
- You can use both `!` and `.` as command prefix
- `.help` shows detailed information about all available commands
- `.admin [password] [hidden]` gives you admin privileges. If the second argument exists, you will become a hidden admin
- `.finish` saves your name in the leaderboard, if you have finished the map
- `.top [N]` shows the first `N` (default: 5) players on the leaderboard
- `.restart` sends you back to the first level. `.res` for short

# Admin Command List
- `.setadminlevel [player] [level]` gives another player admin privileges, level cannot be greater than your own admin level. `.sal` for short
- `.tp [target]` teleports you to a specified level number or player name. Needs at least admin level 2
- `.tpplayer [player] [target]` teleports a certain player to a point or another player. Needs at least admin level 3
- `.mute [playerName] [minutes]` blocks a player from sending chat messages for the specified amount of minutes. Set minutes to zero to unmute player

# Setup
- How to host a Haxball headless bot script on your computer: https://haxmods.com/blog/how-to-host-a-haxball-headless-bot-script-on-your-computer/
