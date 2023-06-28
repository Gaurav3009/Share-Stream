import React from 'react';
import Player from './Player';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "../style/Player.scss";

function VideoContainer(props) {
    const location = useLocation();
    const asset = location.asset;
    console.log(props);
  return (
    <div class = "top">
        <Link to = "/home">
          <HomeIcon 
          sx = {{"color": "white", "marginRight": "0.8rem"}}
          />
        </Link>
        <div id = "player">
        <Player/>
        </div>
    </div>
  )
}

export default VideoContainer