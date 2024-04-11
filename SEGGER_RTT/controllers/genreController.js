const Genre = require('../models/genre');

exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find({});
        res.json(genres);
    } catch (error) {
        res.status(500).send('Error fetching genres');
    }
};

