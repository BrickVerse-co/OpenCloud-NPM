# Install
Open command line and type: ``npm install brickverse``

# Documentation
## NPM Package
https://developers.brickverse.gg/npm-module/introduction

## Web API
https://developers.brickverse.gg/npm-module/web-api

# Links
## GitHub 
https://github.com/BrickVerse-co/OpenCloud-NPM

## NPM Package
https://www.npmjs.com/package/brickverse

# Example
```js
const { WebAPIClient, OpenCloudClient, ThumbnailClient, OCDatabase, OCENV, OCWebhooks } = require("brickverse");

const apiKey = 'your-api-key';
const apiSecret = 'your-api-secret';
const worldId = 1;
const key = "CoolDatabaseKey";
const IsBot = true;

let OpenCloud = new OpenCloudClient(apiKey, apiSecret);
let WebAPI = new WebAPIClient();

console.log(await ThumbnailClient.GetAssetThumbnail(1));
console.log(await ThumbnailClient.GetUserThumbnail(1, "player_head"));
console.log(await OCDatabase.GetAsync(worldId, key));

await OCDatabase.SetAsync(worldId, key, {
    cool_json: true
});

console.log(await OCENV.GetAsync(worldId, key));

await OCENV.SetAsync(worldId, key, "CoolFFlagOrSuperDuperSecret");

OCWebhooks.on('RightToErasure', (payload) => {
    console.log('Received RightToErasure event: ', payload);
    
    // Implement your erasure logic here
});

WebAPI.login(process.env.BRICKVERSE_SECURITY_TOKEN, IsBot).then(async() => {
    await WebAPI.SendFriendRequest(1);
});

OCWebhooks.listen();
```

# Maintainers
This library is maintained by engineers from the BrickVerse Engineering & Research Division, please use issue sections to report bugs on GitHub.

[![](https://data.jsdelivr.com/v1/package/npm/brickverse/badge)](https://www.jsdelivr.com/package/npm/brickverse)
