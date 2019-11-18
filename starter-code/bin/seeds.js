const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity')

// const dbName = 'celebrityLibrary';

// const celebrity = [
//   {
//     name: 'Arnold Swarschenegger',
//   occupation: 'Actor',
//   catchPhrase: 'Ill be back'
//  },
//  {
//   name: 'joey',
// occupation: 'actor',
// catchPhrase: 'How you doing?'
// },
// {
//   name: 'Elvis',
// occupation: 'singer',
// catchPhrase: 'dfwfewsdf'
// }
// ];

mongoose
  .connect('mongodb://localhost:27017/celebrityLibrary', { useNewUrlParser: true })
  .then(() => {
      return Celebrity.create(celebrity);
  })
  .then((insertedDocuments) => {
      console.log('insertedDocuments:', insertedDocuments.length)
      mongoose.connection.close();
  })
  .catch( (err) => console.log(err));