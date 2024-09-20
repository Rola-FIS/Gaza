import React, { useEffect, useState, useContext } from 'react';
import {getStories} from "../../Service/api/index.js";
import {LoadingContext} from "../../Context/index.js";
import LoadingSpinner from "../../Components/Loading/index.jsx";
import MasonryGrid from "../../Components/GridLayout/index.jsx";

export default function Food(){
    const [data, setData] = useState({})
    const { isLoading, setLoading } = useContext(LoadingContext);
    // npm install vite --save-dev
    const getData = async () =>{
        setLoading(true);

        try{
            const payload = {
                limit_start:0,
                type:'Food Program'
            }
            const res = await getStories(payload)
            if(res.data){
                setData(res.data?.message)
            }

        }catch (e) {
            console.log(e,'e')
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    if (isLoading) return <LoadingSpinner />;

    return(
        <div>
            {/*// GRID LAYOUT*/}
            <MasonryGrid data={data}/>
        </div>
    )
}