import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    mongoose.connect('mongodb://localhost:27017/bibli-backend')
      .then(() => {
        console.log('Successfully connected to database!')
      })
      .catch((err) => {
        console.log('Failed to connect to database', err);
        return process.exit(1);
      })
  }
  connect();

  mongoose.connection.on('disconnected', connect);
}
