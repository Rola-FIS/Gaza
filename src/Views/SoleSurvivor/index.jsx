import React, { useEffect, useState, useContext } from 'react';
import {getStories} from "../../Service/api";
import {LoadingContext} from "../../Context";
import LoadingSpinner from "../../Components/Loading/index.jsx";
import MasonryGrid from "../../Components/GridLayout/index.jsx";

export default function SoleSurvivor(){
    const [data, setData] = useState([])
    const { isLoading, setLoading } = useContext(LoadingContext);
    const [error, setError] = useState()

    const getData = async () =>{
        setLoading(true);

        try{

            const payload = {
                limit_start:0,
                type:'sole survivor',
                filters:{"story_type":'Sole Survivor Story', "published": 1}
            }
            const res = await getStories(payload)
            if(res.data){
                const responseWithType = res.data?.data.map(item => ({
                    ...item,
                    story_type: 'sole-survivor'
                }));

                setData(responseWithType);
            }

        }catch (err) {
            setError(err.message || err.response.message)

        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    if (isLoading) return <LoadingSpinner />;
    if (error) return (
        <div className='font-bold flex flex-col gap-4 text-center mt-16 text-red-500'>
            <p>something went wrong !!
                check your connection and try again
            </p>
            <p>{error}</p>
        </div>
    );
    return(
        <div className='  '>
        {/*// GRID LAYOUT*/}
        <div className='mt-0 ml-5 mr-5 p-6 pb-0 '>
            <h2 className='text-lg text-gray-700 font-bold'>Sole Survivor Programs </h2>
            <h5 className='mt-2 ml-2 text-gray-500'>
                Description Sole Survivor Program
            </h5>
            <div className='p-2 m-8'>
                <MasonryGrid data={data}/>

            </div>
        </div>

    </div>
    )
}