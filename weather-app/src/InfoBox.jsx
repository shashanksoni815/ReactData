import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../src/SearchBox.css'

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1742647230803-f70a2525bd37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Min-Temperature = {info.tempMin}&deg;C</p>
          <p>Max-Temperature = {info.tempMax}&deg;C</p>
          <p>Pressure = {info.pressure}</p>
          <p>Humidity = {info.humidity}</p>
          
          <p>Ground-Level = {info.grndLevel}</p>
          
          <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
        </>
    )
}