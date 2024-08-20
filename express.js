const express = require('express') //npm i express
const app = express()
const db = require('./db');

const bodyParser = require('body-parser'); // install bodyParser by npm i bodyParser
app.use(bodyParser.json()); //req.body


app.get('/', function (req, res) {
  res.send('Hello World')
})

 
//Import the router files
const personRoutes = require('./models/routes/personRoutes');

//use the routes
app.use('/person',personRoutes);
app.put('/person',personRoutes);


app.listen(3000, ()=>{
  console.log('Listening on port 3000');
})

/*app.get('/idli', (req, res)=>{
  var customized_idli = {
    name: 'rava idli',
    size: '10 cm ',
    is_chutny:false,
    is_samber: true
  }
  res.send(customized_idli)
})

app.listen(3000)
*/