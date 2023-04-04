// Import the dotenv package
const dotenv = require('./dotenv');

// Load the environment variables from the .env file into process.env
dotenv.config();

// Access the environment variables
const myVar = process.env.MY_VARIABLE;
