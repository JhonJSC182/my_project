const express = require('express')
const app = express()
const PORT = 8383


let data = {
    name: 'james'
}


// HTTP VERBS && ROUTES (or path)

// Type 1 - Website endpoints (sends back html)

app.get('/', (req, res) => {
    console.log('Yay I hit an end point', req.method)
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    console.log('Ohhh now I hit the /dashboard endpoint')
    res.send('hi')
})

// Type 2 - API endpoints (non visual

app.get('/api/data', (req, res) => {
    console.log('This one was for   data')
    res.send(data)
})


app.listen(PORT, () => console.log(`Server has started on : ${PORT}`))