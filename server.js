//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`./dist/liquidity4life`));

app.get(`/*`, function (req, res) {
    res.sendFile(`index.html`, { root: `dist/liquidity4life/`}
  );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);