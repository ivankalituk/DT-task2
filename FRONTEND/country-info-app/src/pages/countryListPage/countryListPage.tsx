import { FC } from "react";
import React from 'react';
import { useGetRequest } from "../../hooks/useGetRequest.ts";
import { getAllCountries } from "../../api/countries.ts";
import { Link } from "react-router-dom";
import './countryListPage.scss'
import { SimpleCountry } from "../../interfaces/interfaces.ts";

const CountryListPage: FC = () => {

    const {data: countries, isFetched: countriesFetched} = useGetRequest<SimpleCountry[]>({fetchFunc: () => getAllCountries(), key: [], enabled: true})

    return(
        <>
            <div className="countryList_list">
                {countries && countriesFetched && countries.length > 0 && countries.map((data: SimpleCountry, index: number) => (
                    <Link to={`/countryInfo/${data.countryCode}`} key = {index}>{data.name}</Link>
                ))}
            </div>
        </>
    )
}

export default CountryListPage