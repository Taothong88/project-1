const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! my name threerapat')
})


app.get('/info', (req, res) => {
    res.json({
        status: 'success',
        message: 'request completed',
        appname: 'backend api',
        appversion: '1.0.0',
        author: 'Threerapat Sridee'
  })
})

app.get('/dev',(req,res)=>{
    res.json({
        name:'Threerapat',
        surname:'Sridee',
        email:'threerapatis@gmail.com'

    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})