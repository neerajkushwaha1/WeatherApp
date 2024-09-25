import './InfoBox.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ({info}){

    const Init_url="";
    let Hot_url="https://media.istockphoto.com/id/483628612/photo/sun-rays-against-a-blue-sky-in-the-clouds.jpg?s=612x612&w=0&k=20&c=YkgKt9v8D_jXapXPhHzwTqCC-ZOrgQtULka19ocxzXg=";
    let Cold_url="https://media.istockphoto.com/id/1155913514/photo/winter-time-of-the-year.jpg?s=612x612&w=0&k=20&c=gHd7AU62koh4wLGCHteVknitqDBFAa7xJfq9xVXsGZg=";
    let Rainy_url="https://media.istockphoto.com/id/1263496541/photo/rain-clouds-on-the-sky-are-falling-background.jpg?s=612x612&w=0&k=20&c=6IJSmoYfnrNUoRK45b9n7A172bvGACbVe9p0wTkhiI0=";



    return(
        <div className="InfoBox">
    <div className='CardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={info.humidity > 80 ? Rainy_url : info.temp > 15 ? Hot_url : Cold_url}      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg; </p> 
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg; C</p> 
              <p>Max Temp = {info.tempMax}&deg; C</p>
              <p>The weather is described as {info.weather} and feels like {info.feelsLike} &deg; C </p>
        
              </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    )
}