import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.0yomq4w.mongodb.net/blogDB`;
    // mongodb+srv://${username}:${password}@cluster0.0yomq4w.mongodb.net/blogDB
    // mongodb+srv://admin-priyatam:<password>@cluster0.0yomq4w.mongodb.net/?retryWrites=true&w=majority
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;