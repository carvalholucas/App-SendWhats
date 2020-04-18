import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Select } from 'antd'
import * as S from '../../../containers/Home/styles'

const { Option } = Select

const OptionsDdi = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
    }, [])

    async function getCountries() {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        const arr = []

        if (response) {
            response.data.map(country => {
                arr.push({
                    name: country.name,
                    alphaCode: country.alpha2Code,
                    callingCode: `+${country.callingCodes[0]}`,
                    flag: `https://www.countryflags.io/${country.alpha2Code}/flat/64.png`
                })
            })

            setCountries(arr)
        }
    }

    return (
        <S.SelectStyle
            defaultValue="+55"
            size="large">
            {countries.map((country, index) => (
                <Option key={index} value={country.callingCode}>
                    <div style={{ display: 'flex' }}>
                        <img src={country.flag} style={{ width: '40px' }} />
                    </div>
                </Option>
            )
            )}
        </S.SelectStyle>
    )
}

export default OptionsDdi
