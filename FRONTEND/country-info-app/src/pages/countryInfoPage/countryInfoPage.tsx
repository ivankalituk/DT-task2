import { FC } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { useGetRequest } from "../../hooks/useGetRequest.ts";
import { getCountryInfo } from "../../api/countries.ts";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import './countryInfoPage.scss'
import { Borders, CountryInfo } from "../../interfaces/interfaces.ts";
const CountryInfoPage: FC = () => {
      

      const { code } = useParams();

    const {data: country, isFetched: countryFetched} = useGetRequest<CountryInfo>({fetchFunc: () => getCountryInfo(String(code)), key: [], enabled: true})

    return(
        <>
            <div className="countryInfo">
                {country && countryFetched && <div>
                    <div className="countryInfo_mainInfo">
                        {country.flag !== null && <img src={country.flag} alt="flag" />}
                        <div>{country.commonName}</div>
                    </div>
                    <div>Country Code: <span>{country.countryCode}</span> </div>
                    <div>Official Name: <span>{country.officialName}</span></div>
                    <div>Region: <span>{country.region}</span></div>
                    <div className="countryInfo_borders">
                        {country.borders.length > 0 && 
                            <>
                                <div>BORDERS:</div>
                            
                                <div className="countryInfo_borders_list">
                                    {country.borders.map((data: Borders, index: number) => (
                                        <a key={index} href={`/countryInfo/${data.countryCode}`}>
                                        {data.commonName}
                                    </a>
                                ))}
                                </div>

                            </>
                        }
                    </div>

                    {country.populationCounts !== null && <div className="countryInfo_population">
                        <div className="countryInfo_population_heading">Population</div>

                        <ResponsiveContainer width="100%" height={400}>

                            
                        <LineChart data={country.populationCounts.map(({ year, value }) => ({
                                year,
                                Population: value, // Переименовываем ключ "value" в "population"
                                }))}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Population" stroke="#8884d8" />
                        </LineChart>
                        </ResponsiveContainer>
                    </div>}
                </div>}
            </div>
        </>
    )
}

export default CountryInfoPage