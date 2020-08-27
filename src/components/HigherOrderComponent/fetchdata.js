import React, {useEffect, useState} from 'react';
import axios from 'axios';

const fetchdata = (WrappedComponent, url)=>{

 const Fetchdata =()=>{

    const [allData, setAllData] = useState([]);

    useEffect(() => {
      let mounted = true
    axios.get(url).then(res => {
      if (mounted) {setAllData(res.data);
      }
      });
    
      return function cleanup() {
        mounted = false
    }

    },[]);

    return (
        <WrappedComponent allData={allData} ></WrappedComponent>
    )
}

 return Fetchdata;

}

export default fetchdata;