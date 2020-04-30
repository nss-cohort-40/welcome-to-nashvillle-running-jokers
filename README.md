# Welcome to Nashville: Build an itinerary for a day trip to Music City

## Running Jokers Team

To run this code:

1. Clone it down
2. Configure your API keys (read it at **_Notes about the APIs_** section below)
3. In the project root, run your dev server of choice ( serve and http-server are nice choices)

## App Features

In this app users can search for four different things to do/visit in Nashville:

- parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
- public art collections -- using Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/eviu-nxp6)
- restaurants -- using the [OpenTable API](opentable.herokuapp.com/)
- concerts -- using the [Ticketmaster's Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

For each category, users' input returns three search results, one of which can be saved to "My Itinerary"
Subsequent saves within the same category replaces previous save

## Notes about the APIs

### Ticketmaster API

The Ticketmaster API requires an `apikey` to be included in the url.

1. Create an account and log into it.
2. Go to MyApps
3. Click "ADD A NEW APP" and input info to create app
4. The `apikey` is labeled as `Consumer Key` in your app details
5. Create `keys.js` file in your scripts directory and input:

```
const appKeys = {
  appKey: "insert-your-consumer-key-here",
};
```

6. Create a .gitignore and save `/scripts/keys.js` into the file.

### Nashville Metro Open Data API & Open Table API

These APIs do not require an API key.
