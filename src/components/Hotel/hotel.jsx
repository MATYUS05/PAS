import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExchangeRates() {
    const [exchangeData, setExchangeData] = useState(null);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            const options = {
                method: 'GET',
                url: 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates',
                params: {
                    locale: 'en-gb',
                    currency: 'AED'
                },
                headers: {
                    'X-RapidAPI-Key': 'cb5d0569afmsh9f47beb7f46f31ap118249jsn22e93b03aea3',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setExchangeData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchExchangeRates();
    }, []);

    if (!exchangeData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Render your exchange data here */}
        </div>
    );
}

export default ExchangeRates;


