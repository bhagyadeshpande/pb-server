const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const plants = require('./routes/api/plants');
const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/plants', plants);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
