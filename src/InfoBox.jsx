import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/925877510/photo/four-seasons-of-year.jpg?s=2048x2048&w=is&k=20&c=O3qpJ6SKZ1ySfjQLs2WD5SzYVtMcN6ZvslOTmJ9YGcM=";

    const HOT_URL = "https://images.unsplash.com/photo-1500320821405-8fc1732209ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

    return (
        <div className="InfoBox">

        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15 
            ? HOT_URL
            : info.temp <= 15 
            ? COLD_URL
            : INIT_URL
        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 15 
            ? < WbSunnyIcon/>
            : <AcUnitIcon/>
        }

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div><b>Temperature</b> = {info.temp}&deg;C</div>
          <div><b>Min Temp</b> = {info.tempMin}&deg;C</div>
          <div><b>Max Temp</b> = {info.tempMax}&deg;C</div>
          <div><b>Humidity</b> = {info.humidity}</div>
          <div><b>The Weather feels like</b> = {info.feelsLike}&deg;C</div>
          <div><b>Climatic Condition</b> = {info.weather}</div>
          <p>
            The Weather can be describe as <b>"{info.weather}"</b> and feels like <b>{info.feelsLike}&deg;C</b>
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
};