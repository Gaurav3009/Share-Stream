import React, { useState, useEffect } from 'react';
import '../style/Explore.scss';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import dp from '../images/dp.jpg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Data from "./Data.js";
import { useFileContext } from './FileContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Explore() {
    const {resp, setResp, currVideo, setCurrVideo, favVideo, setFavVideo} = useFileContext();
    useEffect(()=>{
        Data().then((res)=>setResp(res.data)).catch((err)=>console.log(err));
    },[])

    const checkFav = (a, b) => {
        return a === b;
      }

  return (
    <div className = "top-level">
        <div className = "header">
            <div className = "search">
                <input
                type = "text"
                placeholder = "Search" 
                />
            </div>
            <div className = "profile-nav">
                <NotificationsOutlinedIcon 
                sx={{ width: 30, height: 30 }}
                id ="notifi"/>
                <Link to = "/profile">
                    <Avatar
                        alt="Remy Sharp"
                        src={dp}
                        sx={{ width: 35, height: 35 }}
                    />
                </Link>
            </div>
        </div>

        <div className = "option">
            <Tabs
                // value={value}
                // onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="All" id = "tabs"/>
                <Tab label="Music" id = "tabs"/>
                <Tab label="Sports" id = "tabs"/>
                <Tab label="Gaming" id = "tabs"/>
                <Tab label="Entertainment" id = "tabs"/>
                <Tab label="Education" id = "tabs"/>
                <Tab label="Science" id = "tabs"/>
                <Tab label="Technology" id = "tabs"/>
                <Tab label="Travel" id = "tabs"/>
                {/* <Tab label="Others" id = "tabs"/> */}
            </Tabs>
        </div>
        <div className="video">
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
  )
}

export default Explore