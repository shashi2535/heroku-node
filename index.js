const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ success: true, message: 'deployes node js app' })
})

module.exports = app.listen(5000, () => {
    console.log('server listening')
})
