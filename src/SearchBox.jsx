import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4f7bcc22b3c68c7b8b26dfa1d4be240a";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            
            if (response.ok) {
                let result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };
                return result;
            } else {
                throw new Error(jsonResponse.message || 'Unknown error');
            }
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); // Reset error state before making the API request
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Clear the input field after successful search
        } catch (err) {
            setError(true); // Set error state if an error occurs
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>

            {error && <p style={{color: "red"}}>SORRY..!! We don't have Weather Information about such Place.</p>}
        </div>
    );
}
