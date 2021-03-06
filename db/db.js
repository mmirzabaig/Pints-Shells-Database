const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/brews';

mongoose.connect(connectionString, { newUrlParser: true });


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'Mongoose failed to connect')
});


mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});
