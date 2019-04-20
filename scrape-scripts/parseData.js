const fs = require('fs');
const readline = require('readline');

let listings = [];

const lineReader = readline.createInterface({
  input: fs.createReadStream('data.jsonx'),
});

lineReader.on('line', function (line) {
  if (line !== '//') {
    const data = JSON.parse(line);
    listings.push(...data.data);
  }
});

lineReader.on('close', function (line) {
  console.log('listings.length', listings.length);
  json = JSON.stringify({ listings });
  fs.writeFile('listings.json', json, 'utf8', () => {
    console.log('listings saved!');
  });
});
