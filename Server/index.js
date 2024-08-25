const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
    return "Welcome to the server";
})