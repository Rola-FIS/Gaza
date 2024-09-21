import React, { useEffect, useState, useContext } from 'react';
import CoverStory from "../../assets/images/war12.webp"

import {Button, Card, Divider} from "antd";
import './style.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {getHomePageDetails} from "../../Service/api";
import {LoadingContext} from "../../Context";
import LoadingSpinner from "../../Components/Loading/index.jsx";
import {baseURL} from "../../Service/axios";
import {useNavigate} from "react-router-dom";
export default function Home(){
    const [data, setData] = useState()
    const [error, setError] = useState()
    const { isLoading, setLoading } = useContext(LoadingContext);
    const navigate = useNavigate()
    const getData = async () =>{
        setLoading(true);

        try{
            const res = await getHomePageDetails()
            if(res.data){
                setData(res.data?.message)
            }

        }catch (err) {
            setError(err.message || err.response.message)
            console.log(err,'e')
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
    console.log(data,'data')
    return(
        <div className='pb-32'>
            {/*الناجي الوحيد*/}
            <div className=' img-cover relative h-[550px] w-full'
                 style={{ backgroundImage: `url(${baseURL.concat(data?.sole_survivor&& data?.sole_survivor[0]?.intro_image)})` }}

            >
                <div className='absolute right-4 rounded -bottom-8 h-max-content w-80 bg-orange-300 p-4'>
                    <h3 className=' font-bold'>{data?.sole_survivor&& data?.sole_survivor[0]?.title}</h3>
                    <p className='leading-relaxed'>
                        {data?.sole_survivor&& data?.sole_survivor[0]?.story_description}
                        {/*It is very difficult to be a young mother because the war drains all your energy. The fear of losing my daughter in an airstrike paralyzes my nerves.*/}
                    </p>
                </div>
                {/*<div className='absolute right-4 rounded -bottom-16 h-max-content w-80 bg-orange-300 p-4'>*/}
                {/*    <h3 className=' font-bold'>The Sole Survivor</h3>*/}
                {/*    <p className='leading-relaxed'>*/}
                {/*        It is very difficult to be a young mother because the war drains all your energy. The fear of losing my daughter in an airstrike paralyzes my nerves.*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
            {/*        QUICK STATES*/}
            <div className='mt-16 p-6'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold'>Quick Statistics</h2>
                <div className='flex mt-10 gap-8 justify-center'>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 120, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Number of Camps</h4>
                        <h2 className='font-bold text-red-600 ml-2 '>{data?.statistics && data?.statistics?.number_of_camps || 0}</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 120, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Camps In Palestine</h4>
                        <h2 className='font-bold text-red-600 ml-2 '>{data?.statistics && data?.statistics?.camps_in_palestine || 0}</h2>
                    </Card>

                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 120, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Number of Refugees</h4>
                        <h2 className='font-bold text-red-30 ml-2'>{data?.statistics && data?.statistics?.number_of_refugees || 0}</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 120, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Refugees In Palestine</h4>
                        <h2 className='font-bold text-red-500 ml-2'>{data?.statistics && data?.statistics?.refugees_in_palestine || 0}</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 120, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Refugees out of Palestine</h4>
                        <h2 className='font-bold text-red-400 ml-2'>{data?.statistics && data?.statistics?.refugees_out_of_palestine || 0}</h2>
                    </Card>
                </div>
            </div>

            <div className='mt-10 p-6'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold '>Stories You Should See</h2>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-600 w-[60%] mb-0 '>
                        Israel is trying to wipe out as many Palestinians as possible. This is genocide
                    </p>
                    {/*<Button className='bg-orange-300 p-4  text-white font-bold'>View All</Button>*/}
                </div>

                <ResponsiveMasonry className='mt-3 p-6' columnsCountBreakPoints={{ 300: 1, 750: 2, 900: 4 }}>
                    <Masonry gutter="8px "> {/* Reduced gutter size */}
                        {data?.latest_stories?.slice(0,8)?.map(row => (
                            <Card
                                hoverable
                                bordered
                                size="small"
                                className="relative  group w-full max-w-xs m-1"
                                style={{height:400}}
                                cover={<img alt="" src={baseURL.concat(row?.intro_image)} className="object-cover h-48 w-full" />}
                            >
                                <div className="flex flex-col  p-4">
                                    <h4 className="text-lg font-semibold mb-0">{row?.title}</h4>
                                    <p className="text-gray-500 text-sm">
                                        {row?.story_description}
                                    </p>
                                    <Button
                                        onClick={()=>navigate(`/${row.slug_type}/${row.name}`)}
                                        className="bg-orange-300 p-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Donate
                                    </Button>
                                    <span className="w-max rounded-xl text-gray-500 p-2 text-xs">
                                          {row.published_on}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

            </div>

            <div className='mt-6   max-h-[620px] ms-5 me-5  '>
                <div className='min-h-[420px] flex bg-white rounded-3xl '>
                    <div className='p-6  w-96 flex flex-col leading-relaxed  '>
                        <h3 className='font-bold'>
                            {data?.sole_survivor && data?.sole_survivor[0]?.title}
                        </h3>
                        <p className=' ' >
                            {data?.sole_survivor && data?.sole_survivor[0]?.story_description}
                        </p>

                    </div>
                    <div className='img-opacity relative flex-1 w-32 items-center rounded-l'>
                        <img
                            src={baseURL.concat(data?.sole_survivor&& data?.sole_survivor[0]?.intro_image)}
                            alt='Background'
                            className='object-cover w-full h-full '
                        />
                    </div>
                </div>
                <div className='flex mt-2  ' >
                    <div className='p-6  w-96 flex flex-col leading-relaxed  '>

                    </div>
                    <div className='flex flex-1 w-32 items-center '>
                        {data?.sole_survivor?.slice(0,4)?.map(row=>
                            <Card  bordered size='small'
                                   cover={<img alt=""
                                               src={baseURL.concat(row?.intro_image)}
                                   />}
                                   hoverable
                                   className='flex-0 bg-inherit  '
                                   style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-gray-600 font-bold  underline underline-offset-8 '>{row?.title}</p>
                                        <p className='text-gray-500 text-xs	 '>{row.published_on}</p>
                                    </div>
                                    {/*<Button className='bg-orange-300 text-white '>View</Button>*/}
                                </div>

                            </Card>
                        )}

                        {/*<Card hoverable bordered size='small'*/}
                        {/*      cover={<img alt="" src={CoverStory} />}*/}
                        {/*      className='flex-0 bg-inherit '*/}
                        {/*      style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                        {/*    <div className='flex justify-between items-center'>*/}
                        {/*        <div>*/}
                        {/*            <p className='text-gray-600 font-bold underline underline-offset-8 '>The Sole Survivor</p>*/}
                        {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                        {/*        </div>*/}
                        {/*        /!*<Button className='bg-orange-300 text-white'>View</Button>*!/*/}
                        {/*    </div>*/}

                        {/*</Card>*/}
                        {/*<Card  bordered size='small'*/}
                        {/*       cover={<img alt="" src={CoverStory} />}*/}
                        {/*       className='flex-0 bg-inherit '*/}
                        {/*       style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                        {/*    <div className='flex justify-between items-center'>*/}
                        {/*        <div>*/}
                        {/*            <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>*/}
                        {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                        {/*        </div>*/}
                        {/*        /!*<Button className='bg-orange-300 text-white'>View</Button>*!/*/}
                        {/*    </div>*/}

                        {/*</Card>*/}
                        {/*<Card  bordered size='small'*/}
                        {/*       cover={<img alt="" src={CoverStory} />}*/}
                        {/*       className='flex-0 bg-inherit '*/}
                        {/*       style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                        {/*    <div className='flex justify-between items-center'>*/}
                        {/*        <div>*/}
                        {/*            <p className='text-gray-600 font-bold  underline underline-offset-8'>The Sole Survivor</p>*/}
                        {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                        {/*        </div>*/}
                        {/*        /!*<Button className='bg-orange-300 text-white'>View</Button>*!/*/}
                        {/*    </div>*/}

                        {/*</Card>*/}
                    </div>
                </div>

            </div>

            <div className='mt-16 pl-10 pt-10 pb-10 pr-0 mb-32 max-h-max'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex justify-center'>Family Care</h2>
                <div className=' flex gap-8 mt-10  min-h-[400px] '>
                    <div className=' flex-1 w-[55%] max-h-[500px] '>
                        <div className='flex flex-col gap-2  '>
                            <div className='relative'>
                                <img alt=""
                                     src={baseURL.concat(data?.family_care&& data?.family_care[0]?.intro_image)}
                                     className='rounded w-[100%] object-cover  max-h-[350px]'
                                />
                                <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>
                                    {data?.family_care && data?.family_care[0]?.title}
                                </h3>

                            </div>
                            <div>
                                <p className="text-gray-500">
                                    {data?.family_care&& data?.family_care[0]?.story_description}
                                </p>
                                <div className='flex justify-between items-center'>
                                 <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'10px'}}>
                                    {data?.family_care&& data?.family_care[0]?.published_on}
                                 </span>
                                    <Button
                                        onClick={()=>navigate(`/family-care/${data?.family_care && data?.family_care[0]?.name}`)}
                                        className='bg-orange-300 w-32 text-white font-bold '
                                        // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                    >
                                        Donate
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col w-[25%]   max-h-[400px]'>
                        <div className='flex flex-col  gap-4 '>
                            <div className='w-[80%] flex flex-col gap-2  max-h-[400px]'>
                                <div className='relative'>
                                    <img alt=""
                                         src={baseURL.concat(data?.family_care&& data?.family_care[1]?.intro_image)}
                                         className='rounded w-full object-cover    max-h-[200px] '
                                    />
                                    <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>
                                        {data?.family_care && data?.family_care[1]?.title}
                                    </h3>

                                </div>

                                <div>
                                    <p className="text-gray-500">
                                        {data?.family_care && data?.family_care[0]?.story_description}
                                    </p>
                                    <div className='flex justify-between items-center'>
                                            <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'12px'}}>
                                                 {data?.family_care && data?.family_care[1]?.published_on}
                                             </span>
                                        <Button
                                            onClick={()=>navigate(`/family-care/${data?.family_care && data?.family_care[1]?.name}`)}

                                            className='bg-orange-300 w-32 text-white font-bold '
                                            // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                        >
                                            Donate
                                        </Button>
                                    </div>
                                </div>

                            </div>
                            <div className='w-[80%] flex flex-col gap-2 '>
                                <div className='relative'>
                                    <img alt=""
                                         src={baseURL.concat(data?.family_care&& data?.family_care[2]?.intro_image)}
                                         className='rounded w-full object-cover  max-h-[200px] '
                                    />
                                    <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>
                                        {data?.family_care && data?.family_care[2]?.title}
                                    </h3>

                                </div>

                                <div>
                                    <p className="text-gray-500">
                                        {data?.family_care && data?.family_care[2]?.story_description}
                                    </p>
                                    <div className='flex justify-between items-center'>
                                            <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'12px'}}>
                                                 {data?.family_care && data?.family_care[2]?.published_on}
                                             </span>
                                        <Button
                                            onClick={()=>navigate(`/family-care/${data?.family_care && data?.family_care[2]?.name}`)}
                                            className='bg-orange-300 w-32 text-white font-bold '
                                            // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                        >
                                            Donate
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section className='mt-16 bg-[#203b51e0] pt-6 pb-6'>
                <Divider style={{backgroundColor:'white'}}/>
                <h2 className='pl-6 text-white text-lg text-gray-700 font-bold '>War Victim Care</h2>
                <div className='pl-6 flex gap-4 max-w-full	 overflow-x-auto	'>
                    {/*    war_victims_care*/}
                    {data?.war_victims_care?.slice(0,5)?.map(row=>
                        <Card hoverable size='small'
                               cover={<img alt=""
                                           src={baseURL.concat(row?.intro_image)}
                               />}
                                bordered
                               onClick={()=>navigate(`/war-victims-care/${row.name}`)}
                               className='flex-0 bg-gray-30'
                               style={{ width: 300, height: '300' }}>
                            <div className='flex justify-between items-center'>
                                <div className=' flex flex-col justify-between'>
                                    <p className='text-gray-600 font-bold  underline underline-offset-8 '>{row?.title}</p>
                                    <p className='text-gray-500 text-xs	mb-0 '>{row?.published_on}</p>
                                </div>
                            </div>

                        </Card>
                    )}

                    {/*<Card  size='small'*/}
                    {/*       cover={<img alt="" src={CoverStory} />}*/}
                    {/*       className='flex-0 bg-gray-300  '*/}
                    {/*       style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                    {/*    <div className='flex justify-between items-center'>*/}
                    {/*        <div>*/}
                    {/*            <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>*/}
                    {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</Card>*/}
                    {/*<Card  size='small'*/}
                    {/*       cover={<img alt="" src={CoverStory} />}*/}
                    {/*       className='flex-0 bg-gray-300  '*/}
                    {/*       style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                    {/*    <div className='flex justify-between items-center'>*/}
                    {/*        <div>*/}
                    {/*            <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>*/}
                    {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</Card>*/}
                    {/*<Card  size='small'*/}
                    {/*       cover={<img alt="" src={CoverStory} />}*/}
                    {/*       className='flex-0 bg-gray-300  '*/}
                    {/*       style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>*/}
                    {/*    <div className='flex justify-between items-center'>*/}
                    {/*        <div>*/}
                    {/*            <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>*/}
                    {/*            <p className='text-gray-500 text-xs	 '>12 June, 2024</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</Card>*/}
                </div>
                <Divider style={{backgroundColor:'white'}}/>

            </section>
            <section className='mt-10 pl-6 pr-6 '>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex '>Food Program</h2>
                <div className='flex gap-6 mt-10 pl-10 pr-10'>
                    <img alt=""
                         src={baseURL.concat(data?.food_program&& data?.food_program[0]?.intro_image)}
                         className='rounded w-full  object-cover object-center flex-1 max-h-[500px]	 '
                    />
                    <div className='flex    flex-col gap-4	'>
                        <h3 className='font-semibold'>
                            {data?.food_program&& data?.food_program[0]?.title}
                        </h3>
                        <p className='w-96 tracking-[2px] text-xs'>
                            {data?.food_program&& data?.food_program[0]?.story_description}
                        </p>
                        <Button className='w-32 mt-8' onClick={()=>navigate('/food-programs')}>
                            See More
                        </Button>
                    </div>
                </div>
            </section>
            <Divider  style={{backgroundColor:'#c7b9b9', width:'3px'}}/>
            <section className='mt-16 pl-6 pr-6 '>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex  '>Water Supply</h2>
                <div className='flex gap-6 mt-10 pl-10 pr-10'>
                    <div className='flex    flex-col gap-4	'>
                        <h3 className='font-semibold'>
                            {data?.water_program
                            && data?.water_program[0]?.title}
                        </h3>
                        <p className='w-96 tracking-[2px] text-xs'>
                            {data?.water_program
                            && data?.water_program[0]?.story_description}
                        </p>
                        <Button className='w-32 mt-8'  onClick={()=>navigate('/water-programs')}>
                            See More
                        </Button>
                    </div>
                    <img alt=""
                         src={baseURL.concat(data?.water_program&& data?.water_program[0]?.intro_image)}
                         className='rounded w-full  object-cover object-center flex-1 max-h-[500px]	 '
                    />

                </div>
            </section>
        </div>
    )
}