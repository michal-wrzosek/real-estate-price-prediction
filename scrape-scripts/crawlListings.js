const fs = require('fs');

const { getListing } = require('./getListing');

const currentUser = '';
const cookie = '';
const sessionId = '';

async function crawlListings() {
  const fileRaw = fs.readFileSync('jupyter-notebook/listings.json', 'utf8');
  let { listings } = JSON.parse(fileRaw);
  console.log(listings.length, 'listings to crawl');
  
  let newListings = [];
  let index = 0;

  const crawlListing = async () => {
    const { id } = listings[index];
    console.log('fetching listing', id, 'in progress');
    const listing = await getListing(id, { currentUser, cookie, sessionId });
    console.log('fetching listing', id, 'done');
    newListings.push(listing);
    index++;

    if (index < listings.length) {
      setTimeout(crawlListing, 1000);
    } else {
      console.log('all listings fetched');
      const json = JSON.stringify({ listings: newListings });
      fs.writeFileSync('newListings.json', json, 'utf8');
      console.log(index, 'listings saved');
    }
  };

  if (index < listings.length) {
    crawlListing();
  }
}

crawlListings();
