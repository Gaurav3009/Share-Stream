import React from 'react';
import '../style/Options.scss';
import { BiSearch } from "react-icons/bi";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';

function Options() {
  return (
    <div className = "panel">
        <div className = "head">
            <h3>
                <span>Share</span>
                &nbsp; 
                <span id = "end">Stream</span>
            </h3>
            <p>Decentralized Video Sharing Application</p>
            <button>
                <div>
                <span><BiSearch/></span>
                <span>Discover</span>
                </div>
            </button>
            <div className = "nlist">
                <div className='list'>
                    <span><WhatshotIcon/></span>
                    <span>Trending</span>
                </div>
                <div className='list'>
                    <span><GroupIcon/></span>
                    <span>Following</span>
                </div>
            </div>
        </div>

        <div className = "nlist">
            <h3>Your Videos</h3>
            <div className='list'>
                <span><FavoriteIcon/></span>
                <span>Favourite</span>
            </div>
            <div className='list'>
                <span><VideoLibraryIcon/></span>
                <span>My Videos</span>
            </div>
            <div className='list'>
                <span><RestoreIcon/></span>
                <span>Play History</span>
            </div>
        </div>
    </div>
  )
}

export default Options