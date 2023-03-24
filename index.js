require('dotenv').config();
const app = require('./app.js');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}.`)
});

module.exports = app;