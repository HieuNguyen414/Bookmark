
const express = require('express')
const app = express()

app.get('/IT', (req, res) => res.send(

  {  "data":[
    { "ho": "Nguyen", "ten":"Hieu", "ngaysinh":"1212"},
    { "ho": "Tran", "ten":"Long", "ngaysinh":"1212"},
    { "ho": "Pham", "ten":"Phung", "ngaysinh":"1212"},
    { "ho": "Le", "ten":"CR7", "ngaysinh":"1212"},
    { "ho": "Bui", "ten":"Gerrard", "ngaysinh":"1212"},
    { "ho": "Truong", "ten":"Toure", "ngaysinh":"1212"},
    { "ho": "Vu", "ten":"JackMa", "ngaysinh":"1212"}
  ]  
}
        
))

app.get('/KD', (req, res) => console.log("Here"))

app.listen(3005, () => console.log('Server start port 3005'))