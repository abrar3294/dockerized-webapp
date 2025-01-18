const mongoose = require('mongoose');

// Define the schema for a To-Do item
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true // Removes leading and trailing whitespaces
  },
  completed: {
    type: Boolean,
    default: false // Default value for new tasks
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets the creation date
  }
});

// Export the model for use in other files
module.exports = mongoose.model('Todo', TodoSchema);
