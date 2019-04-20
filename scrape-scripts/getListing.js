const qs = require('qs');
const fetch = require('node-fetch');

async function getListing(id, { cookie, sessionId, currentUser }) {
  const api = 'https://v.asari.pl/apiListing/';
  const query = qs.stringify({
    'id': id,
    'sessionId': sessionId,
    '_dc': +new Date,
  });
  
  try {
    const response = await fetch(`${api}get?${query}`, {
      "credentials": "include",
      "headers":{
        "Cookie": `JSESSIONID=${cookie}`,
        "currentuser": currentUser,
        "accept": "*/*",
        "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6",
        "x-requested-with": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
      },
      "referrer": "https://v.asari.pl/premium/index",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": null,
      "method": "GET",
      "mode": "cors",
    })
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(`error for listing id: ${id}`);
  }
}

module.exports = {
  getListing,
};
