import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://{user}:{password}@cluster0.kde4n.mongodb.net/{database}");

let db = mongoose.connection;

export default db;