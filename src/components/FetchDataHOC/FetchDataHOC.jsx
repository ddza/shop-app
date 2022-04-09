import { useState, useEffect } from "react";

import Spinner from "../Spinner/Spinner";

const FetchDataHOC = (WrappedComponent, url) => {
    const Hoc = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(collection => {setData(collection)})
                .catch(err => console.log(err)) ;  
        },[]);
        return (
            data.length < 1 ? <Spinner/> :
            <WrappedComponent data={ data }/>
        );
    }
    return Hoc;
}
export default FetchDataHOC;