# Install
Open command line and type: ``npm install brickverse``

# Docs
https://developers.brickverse.co

# Endpoints
### Universe API
This endpoint is dedicated to interacting with your universe datastore, worlds, and more. This API is coming soon.

### Web API
<details>
<summary>Client {Class}</summary>

### **Important**

### `new Client()`
Creates a new Client class

### `Client.login(token: string)`
Authenticate the Client with your .BRICKVERSE_SECURITY_TOKEN token (recommended: store in .env file)

### **Endpoints**

### `Client.SendFriendRequest(userId: numer)`
Send friend request to userId

### `Client.GetFriends(userId: numer)`
Get table of friends from requested userId
</details>

# Example
```js
const { Client } = requre("brickverse");
let bot = new Client();

bot.login(process.env.BRICKVERSE_SECURITY_TOKEN).then(async() => {
    await bot.SendFriendRequest(1);
});
```

# Maintainers
This library is mainted by engineers from BrickVerse.