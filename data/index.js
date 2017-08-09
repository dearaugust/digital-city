const express = require('express')
const app = express()

app.get('/about', (req,res) => {
  res.send('this is about page')
})

app.listen(3000, () => console.log('running on port 3000...'))
