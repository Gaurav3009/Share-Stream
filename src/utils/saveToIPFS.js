import axios from "axios";

const saveToIPFS = async (file) => {
    // Create a multipart form data 
    const formData = new FormData();

    // add file to the form data
    formData.append("file", file);

    var config = {
        method: "post",
        url: "https://api.web3.storage/upload",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4NjA1RTJGMkEzYkZDNjI4NDk5NDFGNEQ4MWNmRDQwZkNBNWU3MDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE4NDcxODM3NDksIm5hbWUiOiJTaGFyZVN0cmVhbSJ9.93wcErh-cJoZiRtR-ZvVOFFPYFT55pvNyVP8UicKG_A`,
            "Content-Type": "text/plain",
        },
        data: formData,
    };

    // Posting the form data to the IPFS API
    const response = await axios(config);
    console.log(response.data.cid);
    // returning the CID
    return response.data.cid;
}

export default saveToIPFS;