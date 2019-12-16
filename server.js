const express = require('express')
const app = express()
// const hbs = require('hbs')

 app.use(express.static(__dirname+'/public'))
// addRequestDate = (req,res,next)=> {
//     let RequestAt = new Date()
//     console.log(RequestAt)
//     next()
// }
app.get('/home', (req, res) => {
    let requesAT = new Date().getHours()
    console.log(requesAT)
    if (requesAT < 8 && requesAT > 17)
        res.sendFile(__dirname + "/public/offline.html");
    else { res.sendFile(__dirname + "/public/home.html") }
})

app.get('/contact', (req, res) => {
    let requesAT = new Date().getHours()
    console.log(requesAT)
    if (requesAT < 8 && requesAT > 17)
        res.sendFile(__dirname + '/public/offline.html');
    else { res.sendFile(__dirname + "/public/contact.html") }
})
    app.get('/ourservices', (req, res) => {
        let requesAT = new Date().getHours()
        console.log(requesAT)
        if (requesAT < 8 && requesAT > 17)
            res.sendFile(__dirname + '/public/offline.html')
        else res.sendFile(__dirname + '/public/ourservices.html')
    })
    // app.get('/main',addRequestDate, (req, res) => {
    //     res.send("hello , this is the home page")

    // })
    // app.set('view engine' , hbs)

    // app.get('/connected_user', (req,res) => {
    //     res.render('user.hbs', {name:'hamdii'})
    // })

    // app.get('/story', (req, res) => {
    //     res.send("hello , this is the story page")
    // })
    app.listen(3000, (err) => {
        if (err) console.log("server is not runing")
        else console.log("server is runing on port 3000")
    })