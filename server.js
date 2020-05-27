const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config();
app.use(express.json());

const port = process.env.PORT;
const conn = process.env.CONN;

const Routes = {
    Native: {

    },
    Steam: {
        Global: require('./routes/steam/global/SteamGlobal.route'),
        Individual: require('./routes/steam/individual/SteamIndividual.route')
    }
}

mongoose.connect(conn,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Database Connection Established.`);
        }
    });

app.use('/steam/global', Routes.Steam.Global);
app.use('/steam/individual', Routes.Steam.Individual);

app.listen(port, () => {
    console.log(`Steam Stats API Delivery Listening on http://localhost:${port}`);
});