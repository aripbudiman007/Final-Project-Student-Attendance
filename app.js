const express = require('express')
const app = express()
const router = require('./routers')
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use("/static", express.static('./static/'));
app.use("/assets", express.static(__dirname + '/node_modules/bootstrap'));
app.use(router)

app.listen(port, () => {
    console.log(`app listen on port: ${port}`);
})

