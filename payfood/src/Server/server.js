const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://icram:nonmaislol@clusterfirst.kmoxvfv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use(express.json());
app.use('/', require('./Routes/api'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
