const { default: axios } = require("axios");

// ALL COUNTRIES
const getAllCountries = async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "ERROR WHILE GETTING DATA" });
    }
};

// GET FULL COUNTRY INFO
const getCountryInfo = async (req, res) => {
    try{
        const code = req.params.code
        const countryInfo = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
    
        const flags = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`)
        const countyFlag = flags.data.data.find(item => item.name === countryInfo.data.commonName)
        const population = await axios.get('https://countriesnow.space/api/v0.1/countries/population');
        const countryPopulation = population.data.data.find(item => item.country === countryInfo.data.commonName);
    
        if (countyFlag){
            countryInfo.data.flag = countyFlag.flag
        } else{
            countryInfo.data.flag = null
        }

        if (countryPopulation){
            countryInfo.data.populationCounts = countryPopulation.populationCounts
        } else{
            countryInfo.data.populationCounts = null
        }

        res.status(200).json(countryInfo.data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "ERROR WHILE GETTING DATA" });
    }
};

module.exports = {
    getAllCountries,
    getCountryInfo
}