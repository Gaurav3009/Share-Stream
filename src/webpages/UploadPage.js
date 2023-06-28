import React, { useState, useRef, useEffect } from 'react';
import { BiCloud, BiMusic, BiPlus } from "react-icons/bi";
import { create } from "ipfs-http-client";
import '../style/Upload.scss';
import Button from '@mui/material/Button';
import saveToIPFS from '../utils/saveToIPFS';
import { useCreateAsset } from '@livepeer/react';
import getContract from '../utils/getContract';
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useFileContext } from './FileContext';

function UploadPage() {

    // Creating state for the input field
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [video, setVideo] = useState(File | undefined);
    const [cid, setCID] = useState();
    const {resp, setResp} = useFileContext();
    // Creating a ref for thumbanail and video
    const thumbnailRef = useRef();
    const videoRef = useRef();

    const {  
        mutate: createAsset, 
        data: asset,  
        progress,
        status,
        error,
     } = useCreateAsset(
        video?{
          sources: getArrayValue(),
        }:null,
    );

        useEffect(() => {
            console.log(status);
            console.log(asset);
            if(status === 'success') {
                console.log(typeof(asset[0].id));

                let data1 = {
                    video: asset,
                    title,
                    description,
                    location,
                    category,
                    thumbnail: cid,
                    uploadedDate: Date.now(),
                };
                console.log(resp);
                let obj = resp;
                obj.data[0].all.push(data1);
                obj.data[0].uploads.push(data1); 
                Axios.post("http://localhost:4000/data", 
                obj
            ).then((res)=>console.log(res)).catch((err)=>console.log(err));
                setResp(obj);

                let data = {
                    video: asset[0].id,
                    title,
                    description,
                    location,
                    category,
                    thumbnail: cid,
                    uploadedDate: Date.now(),
                };
                console.log(data);
                console.log(video);
        
                // call the saveVideo function and pass the metadata to it
                saveVideo(data);
            }
        },[status, asset])
        
    // const handleSubmit = async() => {
    //     // call the uploadVideo function
    //     await uploadVideo();

    //     // Call the uploadThumbnail function and get the CID
    //     const thumbnailCID = await uploadThumbnail();
    //     // create an object to store the metadata
    //     setCID(thumbnailCID);
    //     console.log(asset);
    //     let data = {
    //         video: asset?.id,
    //         title,
    //         description,
    //         location,
    //         category,
    //         thumbnail: thumbnailCID,
    //         uploadedDate: Date.now(),
    //     };
    //     console.log(data);
    //     console.log(video);

    //     // call the saveVideo function and pass the metadata to it
    //     await saveVideo(data);
    // }

    // Function to upload thumbnail to the IPFS
    const uploadThumbnail = async() => {
        // pass the file to the saveToIPFS() and get the CID
        const cid = await saveToIPFS(thumbnail);
        return cid;
    }

    // Function to upload the video to LivePeer
    // const uploadVideo = async() => {
    //     // calling the createAsset function from the useCreateAsset hook to upload the video
    //     // try{
    //     //     await createAsset?.();
    //     // } catch(e) {
    //     //     console.log(e);
    //     // }
    //     createAsset?.();
    //     // createAsset({
    //     //     name: title,
    //     //     file: video,
    //     //   });
    // };
    const handleSubmit = async () => {
        const [thumbnailCID, _] = await Promise.all([
            uploadThumbnail(),
            uploadVideo(),
        ]);

        // setTimeout(async () => {
            
        setCID(thumbnailCID);
        // console.log(_);

        // let data = {
        //     video: asset?.id,
        //     title,
        //     description,
        //     location,
        //     category,
        //     thumbnail: thumbnailCID,
        //     uploadedDate: Date.now(),
        // };
        // console.log(data);
        // await saveVideo(data);
        // }, 10000);

    }

const uploadVideo = async () => {
    try {
        if (video) {
            const assetInfo = {
                title,
                description,
                category,
                files: [{path: video.name, content: video}]
            };
            await createAsset(assetInfo);
            // console.log(asset);
        }
    } catch(e) {
        console.log(e);
    }

    };

    // Function to save the video to the contract
    const saveVideo = async(data) => {
        // Fetch the contract from the getContract method
        let contract = await getContract();
        console.log(data.video);

        // Uploading video to the contract
        await contract.uploadVideo(
            data.video,
            data.title,
            data.description,
            data.location,
            data.category,
            data.thumbnail,
            data.UploadedDate
        );
    };

    function getArrayValue() {
        const d = [
            {
              name: video.name,
              file: video,
            }
          ];
        return d;
        //   storage: {
        //     ipfs: true,
        //     metadata: {
        //       name: title,
        //       description: description,
        //     },
        //   },
    }

  return (
    <div className = "outer">
        <div className = "top">
            <Link to = "/profile">
                <Button variant = "outlined" id = "btn1">    
                    Discard
                </Button>
            </Link>
            <Button variant = "contained" id= "btn2"
                onClick = {() => {
                    handleSubmit();
                }}
                // disabled={status === 'loading' || !createAsset}
            >
                <BiCloud style = {{marginRight: "0.3rem"}}/>    
                Upload
            </Button>
        </div>
        <div className = "bottom">
            <div className = "bottom__up">
                <div className = "up--left">
                    <div>
                        <label className="title">Title</label>
                        <input
                            type = "text"
                            value = {title}
                            onChange = {(e) => {
                                setTitle(e.target.value);
                            }}
                            placeholder = "Enter title here..."
                        />
                    </div>

                    <div>
                        <label className="title">Description</label>
                        <textarea
                            
                            id = "textarea"
                            value = {description}
                            onChange = {(e) => {
                                setDescription(e.target.value);
                            }}
                            placeholder = "Enter description here..."
                        />
                    </div>

                    <div className = "loc-cat">
                        <div className = "loc">
                        <label className="title">Location</label>
                        <input
                            value = {location}
                            onChange = {(e) => {
                                setLocation(e.target.value);
                            }}
                            placeholder = "Example: India"
                        />
                        </div>
                        <div className = "cat">
                            <label className="title">Category</label>
                            <select
                                value= {category}
                                onChange= {(e) => {
                                    setCategory(e.target.value);
                                }}
                            >
                                <option>Music</option>
                                <option>Sports</option>
                                <option>Gaming</option>
                                <option>News</option>
                                <option>Entertainment</option>
                                <option>Education</option>
                                <option>Science</option>
                                <option>Technology</option>
                                <option>Travel</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <label style ={{marginLeft: "1rem"}}>Thumbnail</label>
                    <div
                        onClick = {() => {
                            thumbnailRef.current.click();
                        }}
                        className = {
                            thumbnail?"thumb":"thumb"
                        }
                    >
                        {
                            thumbnail ? (
                                <img
                                    onClick={() => {
                                        thumbnailRef.current.click();
                                    }}
                                    src = {URL.createObjectURL(thumbnail)}
                                    alt = "thumbnail"
                                    className = ""
                                /> 
                            ) : (
                                <BiPlus size = {40} color='gray'/>
                        )}
                        <input
                        type = "file"
                        className = "hidden"
                        ref = {thumbnailRef}
                        onChange = {(e) => {
                            setThumbnail(e.target.files[0]);
                        }}
                    />
                    </div>
                    
                </div>
                <div
                    onClick = {() => {
                        videoRef.current.click();
                    }}
                    className = {video?"up--right":"up--right"
                    }
                >
                    {video ? (
                        <video
                            controls
                            src = {URL.createObjectURL(video)}
                            className = ""
                        />
                    ) : (
                        <p>Upload Video</p>
                    )}
                    <input
                    type = "file"
                    className = "hidden"
                    ref = {videoRef}
                    accept = {"video/*"}
                    onChange = {(e) => {
                        setVideo(e.target.files[0]);
                        console.log(e.target.files[0]);
                    }}
                />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default UploadPage