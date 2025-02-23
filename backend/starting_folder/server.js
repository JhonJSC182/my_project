const express = require('express')
const app = express()
const PORT = 8383


// HTTP VERBS && ROUTES (or path)

app.get('/', (req, res) => {
    console.log('Yay I hit an end point', req.method)
    res.sendStatus(201)
})

app.get('/dashboard', (req, res) => {
    console.log('Ohhh now I hit the /dashboard endpoint')
    res.send('hi')
})

app.listen(PORT, () => console.log(`Server has started on : ${PORT}`))