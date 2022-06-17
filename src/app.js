const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const hbs = require('hbs')

const pathPlublic = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '../templales/views')
const partials_path = path.join(__dirname, '../templales/partials')


app.set('view engine', 'hbs');
app.set('views', template_path)

hbs.registerPartials(partials_path)
app.use(express.static(pathPlublic))



// routing the page

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/superhero', (req, res) => {
    res.render('superhero')
})


app.get('*', (req, res) => {
    res.render('404error', {
        errorMgs: "Opps! Page Not Found"
    })
})

// app.get('about /*', (req, res) => {
//     res.render('404error')
// })


app.listen(port, () => {
    console.log(`server linsting is ${port}`)
})