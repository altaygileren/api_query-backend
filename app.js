let express = require('express');
let app = express();
const axios = require('axios');
let cors = require('cors');
app.use(cors());

app.get(`/api-call`, async function (req, res) {
  let apiInfo = await axios.get(`https://financialmodelingprep.com/api/v3/quotes/index/`)
  let sortArr = [...apiInfo.data];
  sortArr.sort((a, b) => a.name.localeCompare(b.name));
  res.json(sortArr)
});

app.listen(1337, function () {
  console.log('Port 1337 is live');
});