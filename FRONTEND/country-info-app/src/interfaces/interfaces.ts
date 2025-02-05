export interface SimpleCountry {
    countryCode: string
    name: string
}

interface PopulationInfo {
    year: number
    value: number
}

export interface Borders{
    borders: null,
    commonName: string
    countryCode: string
    officialName: string
    region: string
}

export interface CountryInfo{
    commonName: string
    countryCode: string
    flag: string
    officialName: string
    populationCounts: PopulationInfo[]
    region: string
    borders: Borders[]
}