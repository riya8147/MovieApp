const Artist = require('../models/artist');

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({});
        res.json(artists);
    } catch (error) {
        res.status(500).send('Error fetching artists');
    }
};
