# Install
Open command line and type: ``npm install brickverse``

# Docs
https://developers.brickverse.gg/npm-module/introduction

# Web API
https://developers.brickverse.gg/npm-module/web-api

# Example
```js
const { WebAPIClient, OpenCloudClient } = require("brickverse");

const apiKey = 'your-api-key';
const apiSecret = 'your-api-secret';
const worldId = 1;
const key = "CoolDatabaseKey";
const IsBot = true;

let OpenCloud = new OpenCloudClient(apiKey, apiSecret);
let WebAPI = new WebAPIClient();

console.log(await OpenCloud.Database.GetAsync(worldId, key));

await OpenCloud.Database.SetAsync(worldId, key, {
    cool_json: true
});

OpenCloud.Webhooks.on('RightToErasure', (payload) => {
    console.log('Received RightToErasure event: ', payload);
    
    // Implement your erasure logic here
});

WebAPI.login(process.env.BRICKVERSE_SECURITY_TOKEN, IsBot).then(async() => {
    await WebAPI.SendFriendRequest(1);
});

OpenCloud.Webhooks.listen();
```

# Maintainers
This library is maintained by engineers from BrickVerse Development team, please use issue sections to report bugs.

# Internal
This is a internal version as of now, and non-operational for public for a while.

[![](https://data.jsdelivr.com/v1/package/npm/brickverse/badge)](https://www.jsdelivr.com/package/npm/brickverse)
