 const express = require('express')
 const bodyParser = require('body-parser')
 const smsClient = require('./text')
 const user = {name: "Prabhat", phone: "7908679275"};
const app = express()
const port = 3000

app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.get('/sendText', async (req,res)=>{
    await smsClient.sendPartnerWelcomeMessage(user)
    res.send('Hello World!')
})

app.post('/textSMS', async (req, res) => {
    let request = req.body;
    let user = {name: request.name, phone: request.phone};
    console.log(user)
    await smsClient.sendPartnerWelcomeMessage(user)
    
    //res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
