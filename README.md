# Install
Open command line and type: ``npm install brickverse``

# Docs
https://developers.brickverse.gg/npm-module/introduction

# Web API
https://developers.brickverse.gg/npm-module/web-api

# Example
```js
const { Client } = requre("brickverse");
let bot = new Client();

// boolean if its a bot or regular user.
bot.login(process.env.BRICKVERSE_SECURITY_TOKEN, true).then(async() => {
    await bot.SendFriendRequest(1);
});
```

# Maintainers
This library is maintained by engineers from BrickVerse Development team, please use issue sections to report bugs.

# Internal
This is a internal version as of now, and non-operational for public for a while.

[![](https://data.jsdelivr.com/v1/package/npm/brickverse/badge)](https://www.jsdelivr.com/package/npm/brickverse)
