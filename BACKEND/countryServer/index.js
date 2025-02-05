const express = require('express');
const cors = require('cors')
const app = express()
const port = 1000

app.use(express.json())
app.use(cors({
    origin: '*',  // Разрешить доступ с любого домена
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


const {getAllCountries, getCountryInfo} = require('./controllers/countryController')


app.get('/country', getAllCountries)
app.get('/countiesFullInfo/:code', getCountryInfo)

app.listen(port, () => {
    console.log("SERVER RUNNING")
})