const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const voiture =require('./routes/voiture')

app.use('/voiture', voiture)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});