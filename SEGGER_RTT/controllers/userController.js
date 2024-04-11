const User = require('../models/user');

// Controller function to create a new user
exports.createUser = async (req, res) => {
  try {
    // Create a new user instance with data from the request body
    const newUser = new User(req.body);
    
    // Save the new user to the database
    await newUser.save();
    
    // Send a successful response with the created user object
    res.status(201).send(newUser);
  } catch (error) {
    // If an error occurs, send a 400 Bad Request response with the error message
    res.status(400).send(error);
  }
};
