# Install
Open command line and type: ``npm install brickverse``
# Docs
https://developers.brickverse.co/npm-module/introduction

# Web API
https://developers.brickverse.co/npm-module/web-api
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
This library is maintained by engineers from BrickVerse.