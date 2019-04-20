const fs = require('fs');
const csv = require('fast-csv');

const fileRaw = fs.readFileSync('jupyter-notebook/listings.json', 'utf8');
const { listings } = JSON.parse(fileRaw);

const parsedListings = listings.reduce((sum, listing) => {
  if (
    !listing.price ||
    !listing.price.amount ||
    !listing.totalArea ||
    !listing.geoLat ||
    !listing.geoLng ||
    listing.noOfRooms === null ||
    listing.floorNo === null ||
    listing.noOfFloors === null
  ) {
    return sum;
  }

  const yearBuilt = listing.yearBuilt ?
    (listing.yearBuilt > 1850 && listing.yearBuilt < 2019) ?
      listing.yearBuilt : null : null;
  
  return [
    ...sum,
    {
      price: listing.price.amount,
      areaM2: listing.totalArea,
      lat: listing.geoLat,
      lng: listing.geoLng,
      nrOfRooms: listing.noOfRooms,
      floorNr: listing.floorNo,
      nrOfFloors: listing.noOfFloors,
      yearBuilt,
    },
  ];
}, []);

csv.writeToStream(fs.createWriteStream("listings.csv"), parsedListings, {headers: true});