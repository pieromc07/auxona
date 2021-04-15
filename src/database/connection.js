require('dotenv').config()
import mongoose from 'mongoose';

const urlConnection = process.env.MONGODB

mongoose.connect(urlConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => {
        console.log(`Database is connect`);
    }).catch(error => {
        console.error(error);
    });
