console.log("ALLAHU AKBAR");

const express = require('express');
const app = express();

//API ki dukan khulla rakhny k tariqa  
// process.env.PORT = deployment hosting (live) port
// 3000 = local port

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running successfully");
})

app.use('/', require('./routes/index.js'))

app.use('/post', (req, res) => {

    res.send([
        {
            userName: "Hammad",
            message: "Assalam o Allaikum",

        }
    ])

    
});
