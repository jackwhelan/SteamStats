const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route '/steam/individual/vanity/:vanity'
// @method GET
// @access PUBLIC
router.get('/vanity/:vanity', async (req, res) => {
    const sponse = await axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_API_KEY}&vanityurl=${req.params.vanity}`);
    res.json(Number(sponse.data.response.steamid));
});

module.exports = router;