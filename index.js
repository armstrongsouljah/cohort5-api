const express = require('express');
const app = express();
const personRoutes = require('./routes/person.route')
// let port = 9000
const { PORT } = process.env || 6000
// make a request
// app.get('/', (req, res) => {
//     let message= "Hello Uganda!"
//    return res.json({
//        message
//     })
// })
console.log(PORT)
app.use('/info', personRoutes) // load router modules



// spin up express server
app.listen(PORT, () => {
    console.log('Server is running at: ',PORT);
})


// MVC (Pattern) -> Model, View, Controller
// Model -> Data storage and structure
// View -> Presentation of the data - requesting and displaying data
// Controllers -> Business Logic

