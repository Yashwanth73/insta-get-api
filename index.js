const instagramGetUrl = require("instagram-url-direct")

const express = require('express');
// Creating app instance
const app = express();
// Creating a PORT
const PORT = process.env.PORT || 5000;
// Enabling app to use json
app.use(express.json());
// initial routing
app.get('/', (req, res) => {
    res.send("Welcome TO IG-API")
})
app.get('/ig', async (req, res) => {
    const url = req.query.url;
    try {
        let links = await instagramGetUrl(url);
        res.json(links);
    } catch (error) {
        res.json(error);
    }
})
app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`))