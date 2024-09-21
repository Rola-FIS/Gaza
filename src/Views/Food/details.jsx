import Details from "../../Components/DetailsStory/story.jsx";
import React, {useContext, useEffect, useState} from "react";
import {LoadingContext} from "../../Context";
import { getStory} from "../../Service/api";
import LoadingSpinner from "../../Components/Loading";
import {useNavigate, useParams} from "react-router-dom";
import {ErrorComponent} from "../../Components/Error";
export default function FoodDetails(){
    const [data, setData] = useState({})
    const { isLoading, setLoading } = useContext(LoadingContext);
    const [error, setError] = useState()

    const {id} = useParams()
    const getData = async () =>{
        setLoading(true);

        try{
            const res = await getStory(id)
            if(res.data){
                setData(res.data?.data)
            }

        }catch (err) {
            setError(err.message || err.response.message)
        } finally {
            setLoading(false);
        }
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(id && id!='undefined') {
            getData();
        }else{
            navigate('/food-programs')
        }
    },[])
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorComponent error={error}/>

    return(
        <Details {...data}/>
    )
}