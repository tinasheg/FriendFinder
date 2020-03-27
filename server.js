// set dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// configure app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});