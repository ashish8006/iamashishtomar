let express = require('express');
let app = express();
let path = require('path');
let port = process.env.PORT || 8000;
const staticpath = path.join(__dirname,'../../views');
app.use(express.static(staticpath));

app.set('view engine', 'html');

app.get('/',(req,res)=>{
  res.render('index.html');
});

app.listen(port,(req,res)=>{
    console.log('Server Is Running Port Number '+port);
});