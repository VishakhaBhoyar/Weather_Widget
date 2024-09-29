import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "City Name",
            feelsLike: "Temperature",
            humidity: "Your City Humidity Range",
            temp: "Your City Temperature",
            tempMax: "Maximum Temperature Range",
            tempMin: "Minimum Temperature Range",
            weather: "How exactly the climatic condition is..?"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}