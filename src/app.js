const express = require('express');
const app = express();
const messageRoutes = require('./routes/messageRoutes');

app.use(express.json());
//init
app.get('/',(_,res)=>{
    res.send('n8n')
} )
app.use('/api/message', messageRoutes);

module.exports = app;