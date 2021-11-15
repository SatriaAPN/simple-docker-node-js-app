const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send('this is the home page');
});

app.listen(port, () => {
    console.log(`server start listening at port:${port}`);
})