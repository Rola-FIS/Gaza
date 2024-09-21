import React, { useEffect, useState, useContext } from 'react';
import {getStories} from "../../Service/api";
import {LoadingContext} from "../../Context";
import LoadingSpinner from "../../Components/Loading/index.jsx";
import MasonryGrid from "../../Components/GridLayout/index.jsx";

export default function WaterSupply(){
    const [data, setData] = useState([])
    const { isLoading, setLoading } = useContext(LoadingContext);
    const getData = async () =>{
        setLoading(true);

        try{
            const payload = {
                limit_start:0,
                type:'water supply',
                filters:{"story_type":'Water Program', "published": 1}
            }
            const res = await getStories(payload)
            if(res.data){
                const responseWithType = res.data?.data.map(item => ({
                    ...item,
                    story_type: 'water-program'
                }));

                setData(responseWithType);
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
            <div className='mt-0 ml-5 mr-5 p-6 pb-0 '>
                <h2 className='text-lg text-gray-700 font-bold'>Water Programs </h2>
                <h5 className='mt-2 ml-2 text-gray-500'>
                    Description Water Programs
                </h5>
                <div className='p-2 m-8'>

                    <MasonryGrid data={data}/>
                </div>
            </div>
        </div>
    )
}