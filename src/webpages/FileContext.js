import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';

const FileContext = React.createContext();

export function useFileContext(){
    return useContext(FileContext);
}

export function FileContextProvider({children}) {
    const [resp, setResp] = useState();
    const [currVideo, setCurrVideo] = useState();
    const [favVideo, setFavVideo] = useState([]);

    useEffect(()=>{
        // Axios.post("http://localhost:4000/data", 
        //         resp
        //     ).then((res)=>console.log(res)).catch((err)=>console.log(err));
    },[resp])

    const value = {
        resp,
        setResp,
        currVideo,
        setCurrVideo,
        favVideo,
        setFavVideo
    };

    return  <FileContext.Provider value = {value}>{children}</FileContext.Provider>

}