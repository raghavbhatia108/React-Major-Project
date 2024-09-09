import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    let HOT_URL = "../src/assets/5741223.jpg"
    let COLD_URL = "../src/assets/pexels-reneterp-25763.jpg"
    let RAIN_URL = "../src/assets/weather-effects-composition.jpg"
    return(
        <div className='infobox'>
            <h2>Weather info - {info.weather}</h2>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temp = {info.temp}&deg; C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Minimum Temperature = {info.tempMin}&deg; C</p>
        <p>Maximum Temperature = {info.tempMax}&deg; C</p>
        <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg; C</p>


        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}