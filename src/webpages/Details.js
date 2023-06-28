import React from 'react';
import '../style/Details.scss';
import Button from '@mui/material/Button';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import dp from '../images/dp.jpg';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {useFileContext} from "./FileContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Details() {
  const {resp, setResp, currVideo, setCurrVideo, favVideo, setFavVideo} = useFileContext();

  return (
    <div className = "profile">
      <div className = "head">
        <Link to = "/home">
          <HomeIcon 
          sx = {{"color": "white", "marginRight": "0.8rem"}}
          />
        </Link>
      <Link to = "/upload">
        <Button variant="outlined" startIcon={<VideoCallIcon/>} id = "btn">
          Upload
        </Button>
      </Link>

      <NotificationsOutlinedIcon id ="notifi"/>
      </div>

      <div className = "name-desc">
        <div className='avatar'>
        <Avatar
          alt="Remy Sharp"
          src={dp}
          sx={{ width: 300, height: 300 }}
        />
        </div>
        <div className='details'>
          <h1>{resp?.data[0].name}</h1>
          <p>{resp?.data[0].Desc}</p>
        </div>
      </div>
      <div className='vid'>
        <div><h2>My Videos</h2></div>
        <div className='video'>
        {
                resp?.data[0].all.map((val, index)=>(
                    <Card id = "card" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`https://ipfs.io/ipfs/${val.thumbnail}`}
                        title="green iguana"
                    />
                    <CardContent id = "cont">
                        <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" id = "desc">
                        {val.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {
                            console.log(val.video)
                        }
                        <Link to = "/player"><Button size="small" onClick={()=>{setCurrVideo(val.video[0])}}><PlayArrowIcon/></Button></Link>
                        <Button id = "btn2" size="small" onClick= {() => {
                            // const arr = favVideo;
                            // (arr.find(checkFav, index) === undefined) ? arr.push(index): arr.splice(arr.indexOf(index), 1);
                            // console.log(arr);
                            // // arr.push(index);
                            // setFavVideo(arr);
                            // className = {favVideo.find(checkFav, index) !== undefined ? "fav":""} 
                            
                        }}><FavoriteBorderIcon/></Button>
                    </CardActions>
                    </Card>
                ))
            }
            {
                console.log(resp)
            }
        </div>
      </div>
    </div>
  )
}

export default Details