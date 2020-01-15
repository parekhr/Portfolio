const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
//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

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get('/api', (req, res, next) => {
  res.send('API Status: Runningg')
});

app.post('/api/email', (req, res, next) => {

   sendGrid.setApiKey('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');
   const msg = {
     to: 'ryan.parekh101@gmail.com',
     from: req.body.email,
     subject: 'Website Contact',
     text: req.body.message
   }

   sendGrid.send(msg)
      .then(result => {
          res.status(200).json({
              success: true
          })
      })
      .catch(err => {
          console.log('error: ', err);
          res.status(401).json({
              success: false
          })
      });

});

app.listen(3030, '0.0.0.0');
