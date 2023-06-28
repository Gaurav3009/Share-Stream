import Axios from 'axios';

const Data = ()=>{
    return Axios.get('http://localhost:4000/data');
} 

export default Data;