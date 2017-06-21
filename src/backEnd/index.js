const express = require('express');
const PORT= process.env.PORT || 8080;

const app = express();
const routes = require('./routes.js');
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
});
